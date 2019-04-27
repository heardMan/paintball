const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MetaSchema = new Schema({
    SUPER_ID: String,
    lastUpdated: {type: Date, default: Date.now},
});
const Meta = mongoose.model("Meta", MetaSchema);
module.exports = Meta;

//
//db.metas.insert({SUPER_ID: "dolladollabillsyall", lastUpdated: Date.now})
//
//
//