const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameDataSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  scenarios: [
    new Schema({
      title: String,
      description: String,
    }),
  ],
});

module.exports = mongoose.model("GameData", gameDataSchema);
