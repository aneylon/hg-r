const Warband = () => {
  return (
    <div>
      <h1>Warband</h1>
      <div>
        <label htmlFor="warbandType">Type : </label>
        <select name="warbandType" id="warbandType">
          <option value="one">One</option>
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
    </div>
  );
};

export default Warband;
