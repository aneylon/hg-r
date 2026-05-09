import { useEffect, useState } from "react";
import GameList from "../GameTypes/GameList";
import GameTypeSelect from "../GameTypes/GameTypeSelect";

const Game = () => {
  // todo load users existing games
  const [oldGames, setOldGames] = useState(null);
  const [newGame, setNewGame] = useState(false);
  const [gameType, setGameType] = useState(null);

  const selectNewGame = () => {
    setNewGame(true);
  };

  const changeGameType = (gt) => {
    setGameType(gt);
  };

  const createNewGame = () => {
    console.log("create new game", gameType);
  };

  useEffect(() => {
    console.log("load games");
  }, []);

  return (
    <div>
      <h1>Select One</h1>
      <button onClick={selectNewGame}>New Game</button>
      {newGame && (
        <div>
          <GameTypeSelect changeGameType={changeGameType} />
          <button onClick={createNewGame}>Create New Game</button>
        </div>
      )}
      {oldGames && (
        <div>
          <select name="oldGames" id="oldGames">
            <option value=""></option>
          </select>
          <button>Load Game</button>
        </div>
      )}
    </div>
  );
};

export default Game;
