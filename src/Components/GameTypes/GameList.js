import { useState } from "react";

const GameList = () => {
  const [gameList, setGameList] = useState([
    { id: 1, title: "Mythic Britain" },
    { id: 2, title: "Weird Fantasy" },
    { id: 3, title: "Mythic Eastern Fantasy" },
    { id: 4, title: "Space Opera" },
  ]);

  return (
    <div>
      <h1>GameList</h1>
      <ul>
        {gameList.map((game) => {
          return <li key={game.id}>{game.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default GameList;
