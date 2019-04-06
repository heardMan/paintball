const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    lease: String,
    property: String,
    tenant: String,
    amount: Number,
    balance: Number,
    paid: Boolean,
    dueDate: Date,

});
const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;