const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const miscFeeSchema = new Schema({
    name: String,
    price: String
});
const LeaseSchema = new Schema({
    tenants: [{ type: Schema.ObjectId, ref: 'User' }],
    rate: String,
    secDep: String,
    miscStuff: Array,
    misc: String,
    miscFee: String,
    dueDate: String,
    moveIn: String,
    moveOut: String,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Lease = mongoose.model("Lease", LeaseSchema);
module.exports = Lease;