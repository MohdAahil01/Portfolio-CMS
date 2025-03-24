const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String }, // Add this for the image URL
  owner: { type: Schema.Types.ObjectId, ref: "User" }
});
module.exports = mongoose.model("Project", projectSchema);