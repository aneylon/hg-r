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
  const { gameTypeId, userId, gameName } = req.body;
  console.log("new game", gameTypeId, userId, gameName);
  // return the new game id / info
  res.send("new game : " + gameTypeId);
});

router.post("/session", (req, res) => {
  const { session } = req.body;
  console.log({ session });
  res.send("add new game session to existing game. ");
});

router.get("/session/:gameId", (req, res) => {
  const { gameId } = req.params;
  console.log("get session for game");
  res.send("send back sessions for game");
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
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

router.post("/gameTypes", (req, res) => {
  const newGameType = {
    title: req.body.title,
  };
  console.log("add", { newGameType });
  res.send("added new game type : " + newGameType.title);
});

module.exports = router;
