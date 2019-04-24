require("dotenv").config();
const express = require("express");
const announcementController = require("../../controllers/announcement.controller");
const router = express.Router();

router
.route("/")
.post(announcementController.create)

module.exports = router;