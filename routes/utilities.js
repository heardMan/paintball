//require dependencies
require("dotenv").config();
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const utilities = {
    getSalt: function(){
        return crypto.randomBytes(16).toString('hex');
    },
    getHash: function(salt, password){
        return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
    },
    checkIfValidPass: function(user, password){
        const unvalidatedHash = this.getHash(user.salt, password);
        return unvalidatedHash === user.hash;
    },
    sendJSONError: function(res, err, statusCode){
        const code = statusCode || 400;
        res.status(code)
        .json({
            message: err.toString()
        });
        console.log(err);
    },
    verifyToken: function (req, res, next) {
        //get cookie with useerId

        //get cookie with user token
        const token = req.headers.cookie;
        //check if token exists
        if (!token || token === undefined) {
            //send message stating no toke received
            return res.status(403).send({ auth: false, message: "No token provided." });
        }
        //find user from id stored in the cookie
        jwt.verify(token.split("=")[1], process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.status(500).send({
                    auth: false,
                    message: "Failed to authenticate token."
                });
            }
            // if everything good, save to request for use in other routes
            req.userId = decoded.userID;
            req.email = decoded.email;
            req.roles = decoded.roles;
            // req.firstName = decoded.firstName;
            // req.lastName = decoded.lastName;
            next();
        });
    },
};

module.exports = utilities;
