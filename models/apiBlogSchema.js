const mongoose = require("mongoose");


const blogSchema = mongoose.Schema({
    title: {type: String, required: [true, "title is required"], unique},
    body: {type: String, required: [true, "body is required"]},
    date: {type: Date, default: Date.now()},
    image_url: {type: String},
    author: {type: String, required: [true, "author is required"]},
    hidden: {type: Boolean}
}, {
  timestamps: true,

});

module.exports = mongoose.model("Blog", blogSchema);