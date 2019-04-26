const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BillSchema = new Schema({
    tenants: [{ type: Schema.ObjectId, ref: 'User' }],
    rent: String,
    creator: String,
    created: {
        type: Date,
        default: Date.now
    },
    repair: String,
    repairStuff: Array, 
    repairFee: String,
    billDue: String,
    billStart: String,
    billEnd: String,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Bill = mongoose.model("Bill", BillSchema);
module.exports = Bill;
