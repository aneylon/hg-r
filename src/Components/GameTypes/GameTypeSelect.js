import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const GameTypeSelect = ({ changeGameType }) => {
  const { request, error, isLoading, data } = useFetch();

  const selectGameType = (selectedGameType) => {
    changeGameType(selectedGameType);
  };

  useEffect(() => {
    request("http://localhost:4200/gameTypes", "GET");
    // TODO : Find a better solution to this
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Game Type select</h2>
      {error && (
        <div className="errorText">
          Error getting game types: {error.message}
        </div>
      )}
      {isLoading && (
        <div>
          <h2>...Loading...</h2>
        </div>
      )}
      {data && (
        <select
          name="gameType"
          id="gameType"
          onChange={(e) => selectGameType(e.target.value)}
        >
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
