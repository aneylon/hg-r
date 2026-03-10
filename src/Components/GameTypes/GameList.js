import { useEffect, useState } from "react";
import GameListItem from "./GameListItem";
import { getStuff, getThing } from "../../api/testAction";
import useFetch from "../../Hooks/useFetch";

const GameList = () => {
  const { request, error, data, isLoading } = useFetch();
  const [gameList, setGameList] = useState([
    { id: 1, title: "Mythic Britain" },
    { id: 2, title: "Weird Fantasy" },
    { id: 3, title: "Mythic Eastern Fantasy" },
    { id: 4, title: "Space Opera" },
  ]);
  // const tryFetch = () => {
  //   fetch("http://localhost:4200");
  // };
  useEffect(() => {
    // TODO : Refactor to use useFetch...
    console.log("get game list");
    let thing = getThing();
    console.log(thing);

    request("http://localhost:4200/test");

    //TODO : handle error?
    // let stuff = getStuff();
    // console.log(stuff);
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
