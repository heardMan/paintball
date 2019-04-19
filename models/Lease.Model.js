const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeaseSchema = new Schema({
    rate: String,
    secDep: String,
    //misc: [{feeType: String, fee: Number}],
    misc: String,
    miscFee: String,
    dateDue: String,
    leaseStart: String,
    leaseEnd: String,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Lease = mongoose.model("Lease", LeaseSchema);
module.exports = Lease;