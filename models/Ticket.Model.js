const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TicketSchema = new Schema({
    subject: String,
    description: String,
    
    property: [{ type: Schema.ObjectId, ref: 'Property' }],
    requester: String,
    requestDate: {type: Date},
    resolved: Boolean,
    resolvedDate: Date,
    messages: [{ type: Schema.ObjectId, ref: 'Message' }],
});
const Ticket = mongoose.model("Ticket", TicketSchema);
module.exports = Ticket;