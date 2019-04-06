require("dotenv").config();
const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router
.route("/all")
.get(userController.findAll)

module.exports = router;