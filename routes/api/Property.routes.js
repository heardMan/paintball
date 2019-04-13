require("dotenv").config();
const express = require("express");
const PropertyController = require("../../controllers/Property.controller");
const router = express.Router();

router
.route("/")
.post(PropertyController.create)

module.exports = router;