const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeaseSchema = new Schema({
    tenants: [{ type: Schema.ObjectId, ref: 'User' }],
    rate: String,
    secDep: String,
    misc: String,
    miscFee: String,
    dateDue: String,
    leaseStart: String,
    leaseEnd: String,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Lease = mongoose.model("Lease", LeaseSchema);
module.exports = Lease;