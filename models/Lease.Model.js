const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeaseSchema = new Schema({
    rate: Number,
    secDep: Number,
    misc: [{feeType: String, fee: Number}],
    dateDue: Number,
    leaseStart: Date,
    leaseEnd: Date,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Lease = mongoose.model("Lease", LeaseSchema);
module.exports = Lease;