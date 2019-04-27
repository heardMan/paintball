const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
    owner: String,
    managers: [{ type: Schema.ObjectId, ref: 'User' }],
    tenants: [{ type: Schema.ObjectId, ref: 'User' }],
    tickets: [{ type: Schema.ObjectId, ref: 'Ticket' }],
    leases: [{ type: Schema.ObjectId, ref: 'Lease' }],
    isVacant: {type: Boolean},
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
    address: String,



});
const Property = mongoose.model("Property", PropertySchema);
module.exports = Property;