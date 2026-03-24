const LocationAdd = () => {
  return (
    <div>
      <h1>Location Add</h1>
      <div>
        <div>
          <label htmlFor="title">Title : </label>
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
        </div>
        <div>
          <label htmlFor="boon">Boon : </label>
          <input type="text" name="boon" id="boon" placeholder="Boon" />
        </div>
        <div>
          <label htmlFor="curse">Curse : </label>
          <input type="text" name="curse" id="curse" placeholder="Curse" />
        </div>
        <div>
          <label>Connections : </label>
        </div>
      </div>
    </div>
  );
};

export default LocationAdd;
