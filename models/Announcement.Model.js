const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnnouncementSchema = new Schema({
    announceTitle: String,
    announceDescription: String,
    creator: String,
});
const Announcement = mongoose.model("Announcement", AnnouncementSchema);
module.exports = Announcement;