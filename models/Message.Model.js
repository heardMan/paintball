const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    sender: String,
    receiver: String,
    ticketID: String,
    message: String,
    dateSent: Date
});
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;