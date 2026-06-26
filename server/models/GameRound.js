const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameRoundSchema = new Schema({
  roundName: {
    type: String,
    required: true,
  },
  roundDescription: {
    type: String,
    required: true,
  },
  phases: [
    new Schema({
      phaseName: String,
      phaseDescription: String,
    }),
  ],
});

module.exports = mongoose.model("GameRound", gameRoundSchema);
