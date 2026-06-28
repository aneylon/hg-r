const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
  },
});

module.exports = mongoose.model("Discussion", discussionSchema);
