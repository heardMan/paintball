require("dotenv").config();
const express = require("express");
const PropertyController = require("../../controllers/Property.controller");
const router = express.Router();

router
.route("/")
.post(PropertyController.create)

router
.route("/:id")
.get(PropertyController.findOne)

router
.route("/owned")
.get(PropertyController.findOwnedProperties)

module.exports = router;