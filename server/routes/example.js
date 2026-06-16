const express = require("express");
const router = express.Router();

let examples = [
  { id: 1, text: "one" },
  { id: 2, text: "two" },
  { id: 3, text: "three" },
  { id: 4, text: "four" },
];

router.get("/:id", (req, res) => {
  const { id } = req.params;
  // TODO : get from mongo
  res.send("Get comment for id : ", id);
});

router.get("/", (req, res) => {
  // TODO : get from mongo
  res.send(examples);
});

router.post("/", (req, res) => {
  let { newItem } = req.body;
  console.log({ newItem });
  // TODO : save to mongo
  console.log("testrers");
  res.send({ one: "1" });
});

// TODO : Delete Route
// Delete from mongo
router.delete("/:id", (req, res) => {
  let { id } = req.params;
  res.send("delete id : " + id);
});

module.exports = router;
