const mongoose = require("mongoose");


const MemberSchema = mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        max: 50
    },
    phone: {
        type: String,
        required: true,
    },
    memberships: {
        type : Array
    },
    birthday: {
        type: Date
    },
    address : {
        type: String
    }
});


module.exports = mongoose.model('Member', MemberSchema);;