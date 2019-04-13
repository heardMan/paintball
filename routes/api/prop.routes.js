require("dotenv").config();
const express = require("express");
const propController = require("../../controllers/prop.controller");
const router = express.Router();

router
.route("/all")
.get(propController.findAll)

module.exports = router;