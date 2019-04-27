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
    roles: {
        type:Array
    },
    managed_leases:[{ type: Schema.ObjectId, ref: 'Lease' }],
    owned_properties: [{ type: Schema.ObjectId, ref: 'Property' }],
    managed_properties: [{ type: Schema.ObjectId, ref: 'Property' }],
    leased_properties: [{ type: Schema.ObjectId, ref: 'Property' }],
    leases: [{ type: Schema.ObjectId, ref: 'Lease' }],
    createdTickets: [{ type: Schema.ObjectId, ref: 'Ticket' }],
    assignedTickets: [{ type: Schema.ObjectId, ref: 'Ticket' }],
    paymentsManager: [{ type: Schema.ObjectId, ref: 'Payment' }],
    payments: [{ type: Schema.ObjectId, ref: 'Payment' }],
});

UserSchema.methods.setFullName = function(){
    this.fullName = `${this.firstName} ${this.lastName}`;
}

UserSchema.methods.lastUpdateDate = function(){
    this.lastUpdated = Date.now;

}

const User = mongoose.model("User", UserSchema);

module.exports = User;
