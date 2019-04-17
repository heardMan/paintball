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

    res.status(200).send(user);
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

module.exports = router;