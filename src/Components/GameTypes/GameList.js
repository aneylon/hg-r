import { useEffect, useState } from "react";
import GameListItem from "./GameListItem";
import { getThing } from "../../api/testAction";

const GameList = () => {
  const [gameList, setGameList] = useState([
    { id: 1, title: "Mythic Britain" },
    { id: 2, title: "Weird Fantasy" },
    { id: 3, title: "Mythic Eastern Fantasy" },
    { id: 4, title: "Space Opera" },
  ]);

  useEffect(() => {
    console.log("get game list");
    let thing = getThing();
    console.log(thing);
  }, []);

  return (
    <div>
      <h1>GameList</h1>
      <ul>
        {gameList.map((game) => {
          return <GameListItem game={game} key={game.id} />;
        })}
      </ul>
    </div>
  );
};

export default GameList;
