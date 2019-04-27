require("dotenv").config();
const db = require("../../models");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const utilities = require("../utilities");

router.get("/verify", utilities.verifyToken, function (req, res) {
    const user = {};
    user.id = req.userId,
    user.email = req.email,
    user.roles = req.roles

    const query = {email: req.email}
    console.log(query);
    db.User
        .find(query)
        .populate('owned_properties')
        .populate('leased_properties')
        .populate('managed_properties')
        .populate('createdTickets')
        .populate('assignedTickets')
        .populate('payments')
        .populate('paymentsManager')
        .populate('managed_leases')
        .populate('leases')
        .then(dbModel => {
            console.log("User"+dbModel);

            user.managed_properties = dbModel[0].managed_properties;
            user.leased_properties = dbModel[0].leased_properties;

            user.owned_properties = dbModel[0].owned_properties;
           
            user.createdTickets = dbModel[0].createdTickets;
            user.assignedTickets = dbModel[0].assignedTickets;
            user.payments = dbModel[0].payments;
            
            user.paymentsManager = dbModel[0].paymentsManager;

            user.leases = dbModel[0].leases;
            user.managed_leases = dbModel[0].managed_leases;


            res.status(200).send(user);
        })
    
})

router.post("/signIn", (req, res) => {
    console.log(req.body);
    var user = {
        email: req.body.email,
        password: req.body.password
    };
    var query = { email: user.email };
    db.User.find(query)
        .then(resp => {
            console.log(resp[0]);
            const userData = resp[0];

            if (utilities.checkIfValidPass(userData, user.password)) {
                const expiry = new Date();
                expiry.setDate(expiry.getDate() + 7);
                console.log(`USERDATA:${userData}`);
                var token = jwt.sign(
                    {
                        exp: parseInt(expiry.getTime() / 1000),
                        userID: userData._id,
                        email: userData.email,
                        roles: userData.roles
                    },
                    process.env.JWT_SECRET
                );
                res
                    .cookie("token", token)
                    .status(200)
                    .send({
                        userID: userData._id,
                        email: userData.email,
                        roles: userData.roles
                    });
            } else {
                utilities.sendJsonError(res, new Error("WRONG PASSWORD"), 401);
            }
        })
        .catch(err => console.log(err))
});

router.post("/register", (req, res) => {
    console.log(req.body);
    var user = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    };

    var salt = utilities.getSalt();

    var userInstance = {
        email: user.email,
        roles: user.role,
        salt: salt,
        hash: utilities.getHash(salt, user.password),
    };

    db.User.create(userInstance)
        .then(resp => {
            console.log(resp);
            res
                .sendStatus(200)
        })
        .catch(err => console.log(err));


});

router.get("/manageLeaseTenant", utilities.verifyToken, function(req,res){
    console.log("router get lease tenants");
    db.leases.findAll({
       where:{tenants: req._id}
  }).then(res => {
    console.log(res);
  });
});



module.exports = router;