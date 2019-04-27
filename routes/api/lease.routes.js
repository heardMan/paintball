require("dotenv").config();
const express = require("express");
const LeaseController = require("../../controllers/lease.controller");
const router = express.Router();
router
.route("/")
.get(LeaseController.findOne)
.post(LeaseController.create)
module.exports = router;