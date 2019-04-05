require("dotenv").config();
const db = require("../../models");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const utilities = require("../utilities");

router.post("/signIn", (req, res) => {
    console.log(req.body);
    var user = {
        email: req.body.email,
        password: req.body.password
    };
    var query = {email: user.email};
    db.User.find(query)
    .then( resp => {
        console.log(resp[0]);
        const userData = resp[0];

        if (utilities.checkIfValidPass(userData, user.password)) {
            const expiry = new Date();
            expiry.setDate(expiry.getDate() + 7);
            var token = jwt.sign(
                {
                    exp: parseInt(expiry.getTime() / 1000),
                    userID: userData._id,
                    email: userData.email
                },
                process.env.JWT_SECRET
            );
            res
            .cookie("token", token)
            .status(200)
            .send("cookie set");
        } else {
            utilities.sendJsonError(res, new Error("WRONG PASSWORD"), 401);
        }
    })
    .catch( err => console.log(err))
});

router.post("/register", (req, res) => {
    console.log(req.body);
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    var salt = utilities.getSalt();

    var userInstance = {
        email: user.email,
        salt: salt,
        hash: utilities.getHash(salt, user.password),
    };

    db.User.create(userInstance)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
});

module.exports = router;