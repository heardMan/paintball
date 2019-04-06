const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AnnouncementSchema = new Schema({});
const Announcement = mongoose.model("Announcement", AnnouncementSchema);
module.exports = Announcement;