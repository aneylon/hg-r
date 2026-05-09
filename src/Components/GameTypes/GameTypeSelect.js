import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const GameTypeSelect = () => {
  const { request, error, isLoading, data } = useFetch();

  useEffect(() => {
    console.log("get game types");
    request("http://localhost:4200/gameTypes", "GET");
  }, []);
  return (
    <div>
      <h2>Game Type select</h2>
      {isLoading && (
        <div>
          <h2>...Loading...</h2>
        </div>
      )}
      {!isLoading && (
        <select name="gameType" id="gameType">
          {data.map((item) => {
            return (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default GameTypeSelect;
