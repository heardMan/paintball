const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ConversationSchema = new Schema({
    members: [{ type: Schema.ObjectId, ref: 'User' }],
    
    messages: [{ type: Schema.ObjectId, ref: 'Message' }],
    created: Date,
    lastUpdated: Date
});
const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;