import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

const WarbandAdd = ({ refresh }) => {
  const [newWarband, setNewWarband] = useState(null);
  const { data, isLoading, error, request } = useFetch();

  const addNewWarband = async () => {
    const result = await request("http://localhost:4200/warbands", "POST", {
      name: newWarband,
    });
    setNewWarband(null);
    // TODO : Why doesn't this show the update?
    refresh();
  };

  return (
    <div>
      <h1>warband add</h1>
      <input
        value={newWarband}
        onChange={(e) => setNewWarband(e.target.value)}
        type="text"
        name="newWarband"
        id="newWarband"
        placeholder="New Warband"
      />
      <button onClick={addNewWarband} disabled={!newWarband}>
        Add
      </button>
    </div>
  );
};

export default WarbandAdd;
