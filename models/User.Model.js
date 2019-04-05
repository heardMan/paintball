const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: "eMail is required.",
        match: [/.+@.+\../, "Please enter a valid email address"]
    },
    hash:{
        type: String,
    },
    salt:{
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
    },
    
});

UserSchema.methods.setFullName = function(){
    this.fullName = `${this.firstName} ${this.lastName}`;
}

UserSchema.methods.lastUpdateDate = function(){
    this.lastUpdated = Date.now;

}

const User = mongoose.model("User", UserSchema);

module.exports = User;
