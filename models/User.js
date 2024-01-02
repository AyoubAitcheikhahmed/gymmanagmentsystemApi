const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        max:50,
        min:6
    },
    isAdmin:{
        type: Boolean,
        require: true
    }  
})


module.exports = mongoose.model("User", UserSchema);
