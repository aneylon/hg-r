import { useState } from "react";
import BorderLandsCharacter from "./BorderLandsCharacter";

const DeepBelowRoster = () => {
  const [editRoster, setEditRoster] = useState(false);
  const clickEdit = () => {
    setEditRoster(!editRoster);
  };
  return (
    <div>
      <h1>Warband Roster</h1>
      <button onClick={clickEdit}>Edit Roster</button>
      <label htmlFor="storyPoints">Story Points :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="storyPoints"
        id="storyPoints"
        placeholder="Story Points"
      />

      <label htmlFor="determination">Determination :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="determination"
        id="determination"
        placeholder="Determination"
      />

      <label htmlFor="warbandName">Warband Name :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="warbandName"
        id="warbandName"
        placeholder="Warband Name"
      />

      <label htmlFor="settlement">Settlement :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="settlement"
        id="settlement"
        placeholder="Settlement"
      />

      <label htmlFor="sideQuests">Side Quests :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="sideQuests"
        id="sideQuests"
        placeholder="Side Quests"
      />

      <label htmlFor="potionsAndRunes">Potions and Runes :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="potionsAndRunes"
        id="potionsAndRunes"
        placeholder="Potions and Runes"
      />

      <label htmlFor="equipmentStash">Equipment Stash :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="equipmentStash"
        id="equipmentStash"
        placeholder="Equipment Stash"
      />

      <label htmlFor="goldMarks">Gold Marks :</label>
      <input
        disabled={!editRoster}
        type="text"
        name="goldMarks"
        id="goldMarks"
        placeholder="Gold Marks"
      />

      <div>
        <BorderLandsCharacter />
        <BorderLandsCharacter />
      </div>
      <div>
        <h1>Recruited Characters</h1>
        <BorderLandsCharacter />
        <BorderLandsCharacter />
      </div>
    </div>
  );
};
export default DeepBelowRoster;
