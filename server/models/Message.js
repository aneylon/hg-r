const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
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
  recipientId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
