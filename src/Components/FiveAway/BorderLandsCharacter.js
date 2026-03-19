import { useState } from "react";

const BorderLandsCharacter = ({ newCharacter = false, character }) => {
  const [editCharacter, setEditCharacter] = useState(false);
  const clickEdit = () => {
    setEditCharacter(!editCharacter);
  };
  return (
    <div className="character">
      <button onClick={clickEdit}>Edit</button>
      <form action="">
        <div>
          <label htmlFor="characterName">Name :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="characterName"
            id="characterName"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="origin">Origin :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="origin"
            id="origin"
            placeholder="Origin"
          />
        </div>
        <div>
          <label htmlFor="agility">Agility :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="agility"
            id="agility"
            placeholder="Agility"
          />
          <label htmlFor="speed">Speed :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="speed"
            id="speed"
            placeholder="Skill"
          />
        </div>
        <div>
          <label htmlFor="combatSkill">Combat Skill :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="combatSkill"
            id="combatSkill"
            placeholder="Combat Skill"
          />
        </div>
        <div>
          <label htmlFor="tough">Tough :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="tough"
            id="tough"
            placeholder="Tough"
          />
          <label htmlFor="armor">Armor :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="armor"
            id="armor"
            placeholder="Armor"
          />
        </div>
        <div>
          <label htmlFor="luck">Luck :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="luck"
            id="luck"
            placeholder="Luck"
          />
          <label htmlFor="will">Will :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="will"
            id="will"
            placeholder="Will"
          />
          <label htmlFor="recovery">Recovery :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="recovery"
            id="recovery"
            placeholder="Recovery"
          />
        </div>
        <div>
          <label htmlFor="traits">Traits :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="traits"
            id="traits"
            placeholder="Traits"
          />
        </div>
        <div>
          <label htmlFor="equipment">Equipment :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="equipment"
            id="equipment"
            placeholder="Equipment"
          />
        </div>
        <div>
          <label htmlFor="xp">XP :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="xp"
            id="xp"
            placeholder="XP"
          />
          <label htmlFor="advancements">Advancements :</label>
          <input
            disabled={!editCharacter}
            type="text"
            name="advancements"
            id="advancements"
            placeholder="Advancements"
          />
        </div>
        {newCharacter && (
          <input disabled={!editCharacter} type="submit" value="Add" />
        )}
        {editCharacter && (
          <input disabled={!editCharacter} type="submit" value="Update" />
        )}
      </form>
    </div>
  );
};

export default BorderLandsCharacter;
