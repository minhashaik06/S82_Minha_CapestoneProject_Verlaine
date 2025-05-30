const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true }); 

module.exports = mongoose.model("Routine", routineSchema);