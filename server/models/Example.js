const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exampleSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Example", exampleSchema);
