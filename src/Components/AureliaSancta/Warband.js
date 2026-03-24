import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

const Warband = () => {
  const { error, isLoading, data, request } = useFetch();

  const addUserWarband = () => {
    console.log("add a new warband.");
  };

  useEffect(() => {
    request("http://localhost:4200/warbands");
  }, []);

  return (
    <div>
      <h1>Warband</h1>
      {isLoading && <div>...loading...</div>}
      {error && <div className="errorText">{error}</div>}
      <div>
        <label htmlFor="warbandType">Type : </label>
        <select name="warbandType" id="warbandType" disabled={isLoading}>
          {data &&
            data.map((warband) => {
              return (
                <option key={warband.id} value={warband.name}>
                  {warband.name}
                </option>
              );
            })}
        </select>
      </div>
      <div>
        <label htmlFor="warbandName">Name : </label>
        <input
          type="text"
          placeholder="Warband Name"
          name="warbandName"
          id="warbandName"
        />
      </div>
      <button onClick={addUserWarband} disabled={isLoading}>
        Add
      </button>
    </div>
  );
};

export default Warband;
