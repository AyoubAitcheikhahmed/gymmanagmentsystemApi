const mongoose = require("mongoose");

const MembershipSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    validFrom: {
        type: Date,
        require: true,
    },
    validTo: {
        type: Date,
        require: true,
    }
});




module.exports = mongoose.model('Membership', MembershipSchema);