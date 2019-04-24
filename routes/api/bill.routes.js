require("dotenv").config();
const express = require("express");
const BillController = require("../../controllers/bill.controller");
const router = express.Router();
router
.route("/")
.post(BillController.create)
module.exports = router;