const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
  id: { type: Number},
  content: { type: String },
  important: { type: Boolean}
}, {
  timestamps: true
});

module.exports = mongoose.model("Note", noteSchema);