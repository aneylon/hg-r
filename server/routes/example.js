const express = require("express");
const Example = require("../models/Example");
const router = express.Router();

let examples = [
  { id: 1, text: "one" },
  { id: 2, text: "two" },
  { id: 3, text: "three" },
  { id: 4, text: "four" },
];

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  // TODO : get from mongo
  const example = await Example.findById(id);

  // res.send("Get comment for id : ", id);
  res.status(200).json(example);
});

router.get("/", async (req, res) => {
  // TODO : get from mongo
  const examples = await Example.find();

  // res.send(examples);
  res.status(200).json(examples);
});

router.post("/", async (req, res) => {
  let { newItem } = req.body;
  console.log({ newItem });
  let example = await Example.create({ text: newItem });
  // TODO : save to mongo
  console.log("testrers", example);
  res.send({ one: "1" });
});

// TODO : Delete Route
// Delete from mongo
router.delete("/:id", (req, res) => {
  let { id } = req.params;
  res.send("delete id : " + id);
});

module.exports = router;
