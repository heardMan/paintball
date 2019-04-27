const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    lease: [{ type: Schema.ObjectId, ref: 'Lease' }],
    property: [{ type: Schema.ObjectId, ref: 'Property' }],
    tenant: [{ type: Schema.ObjectId, ref: 'User' }],
    amount: Number,
    balance: Number,
    paid: Boolean,
    dueDate: Date,

});
const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;