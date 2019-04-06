const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeaseSchema = new Schema({
    rate: Number,
    frequency: Number,
    frequencyUnits: String,
    dateDue: String,
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    
});
const Lease = mongoose.model("Lease", LeaseSchema);
module.exports = Lease;