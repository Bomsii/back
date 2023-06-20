const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstname: {type: String, required: true, trim: true},
    username: {type: String, required: true, unique: true, trim: true, maxLength: 8},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true}
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);