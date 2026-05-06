import { useEffect, useState } from "react";
import GameList from "../GameTypes/GameList";

const Game = () => {
  // todo load users existing games
  const [oldGames, setOldGames] = useState(null);
  const [newGame, setNewGame] = useState(false);

  const selectNewGame = () => {
    setNewGame(true);
  };

  useEffect(() => {
    console.log("load games");
  }, []);

  return (
    <div>
      <h1>Select One</h1>
      <button onClick={selectNewGame}>New Game</button>
      {newGame && <GameList />}
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
