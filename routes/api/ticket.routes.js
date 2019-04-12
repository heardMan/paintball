require("dotenv").config();
const express = require("express");
const ticketController = require("../../controllers/ticket.controller");
const router = express.Router();

router
.route("/")
.post(ticketController.create)

module.exports = router;