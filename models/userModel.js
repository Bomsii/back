const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstname: {type: String, required: [true, "Your firstname is required"], trim: true},
    username: {type: String, required: [true, "Your username is required"], unique: true, trim: true, minLength: 8},
    email: {type: String, required: [true, "Your email address is required"], unique: true, trim: true},
    password: {type: String, required: [true, "Your password is required"], trim: true},
    createdAt: {
      type: Date,
      default: new Date(),
    }
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);