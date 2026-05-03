import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import WarbandAdd from "./WarbandAdd";

const Warbands = () => {
  const { error, isLoading, data, request } = useFetch();

  const refresh = () => {
    console.log("refresh");
    request("http://localhost:4200/warbands");
  };

  useEffect(() => {
    request("http://localhost:4200/warbands");
  }, []);

  return (
    <div>
      <h1>Warbands</h1>
      {isLoading && <div>...loading...</div>}
      {error && <div className="errorText">{error}</div>}
      <ul>
        {data &&
          data.map((warband) => {
            return <li key={warband.id}>{warband.name}</li>;
          })}
      </ul>
      <WarbandAdd refresh={refresh} />
    </div>
  );
};

export default Warbands;
