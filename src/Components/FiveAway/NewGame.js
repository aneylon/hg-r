import { useState } from "react";

const NewGame = () => {
  const [gameType, setGameType] = useState(null);
  return (
    <div>
      <h2>New Game</h2>
      <div>
        <select
          name="newGameType"
          id="newGameType"
          required={true}
          defaultValue="Leagues"
          onChange={(e) => {
            console.log(e.target.value);
            setGameType(e.target.value);
          }}
          value={gameType}
        >
          <option value="Leagues">Leagues</option>
          <option value="Parsecs">Parsecs</option>
        </select>
        <button
          onClick={() => {
            console.log("select : ", gameType);
          }}
        >
          select
        </button>
      </div>
    </div>
  );
};

export default NewGame;
