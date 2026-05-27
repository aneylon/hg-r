const express = require("express");
const router = express.Router();

const gameTypes = [
  {
    id: "1",
    title: "Mythic Britain",
  },
  {
    id: "2",
    title: "Weird Fantasy",
  },
  {
    id: "3",
    title: "Mythic Eastern Fantasy",
  },
  {
    id: "4",
    title: "Space Opera",
  },
];

router.post("/newGame", (req, res) => {
  console.log(req.body);
  const { gameTypeId } = req.body;
  console.log("new game", gameTypeId);
  res.send("new game : " + gameTypeId);
});

router.post("/", (req, res) => {
  const { userId } = req.body;
  console.log("get games for user : ", userId);
  res.send("get games for user : " + userId);
});

router.post("/update/:gameId", (req, res) => {
  const { updateInfo } = req.body;
  const { gameId } = req.params;
  console.log("update game : ", gameId, 'with info " ', { updateInfo });
  res.send("update game : " + gameId);
});

router.get("/gameTypes", (req, res) => {
  res.send(gameTypes);
});

module.exports = router;
