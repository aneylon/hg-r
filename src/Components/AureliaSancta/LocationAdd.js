import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

const LocationAdd = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [boon, setBoon] = useState(null);
  const [curse, setCurse] = useState(null);
  const [connections, setConnections] = useState([]);
  const [controllingWarband, setControllingWarband] = useState(null);
  const [formError, setFormError] = useState(null);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [size, setSize] = useState({ width: "", height: "" });
  const [location, setLocation] = useState({ x: "", y: "" });

  const {
    data: locationData,
    isLoading: locationIsLoading,
    error: locationError,
    request: locationRequest,
  } = useFetch();

  const {
    data: warbandData,
    isLoading: warbandIsLoading,
    error: warbandError,
    request: warbandRequest,
  } = useFetch();

  const {
    data: newLocationData,
    isLoading: newLocationIsLoading,
    error: newLocationError,
    request: newLocationRequest,
  } = useFetch();

  const formValid = () => {
    if (
      title !== null &&
      title !== "" &&
      description !== null &&
      description !== "" &&
      boon !== null &&
      boon !== "" &&
      curse !== null &&
      curse !== "" &&
      location.x !== "" &&
      location.x !== null &&
      location.y !== "" &&
      location.y !== null &&
      size.width !== null &&
      size.width !== "" &&
      size.height !== null &&
      size.height !== ""
    )
      return true;
    else return false;
  };

  const addNewLocation = () => {
    console.log("add new location");
    setFormError(null);
    let newLocation = {
      title,
      description,
      boon,
      curse,
      connections,
      controllingWarband,
      location,
      size,
    };
    if (title !== null && description !== null) {
      newLocationRequest("http://localhost:4200/locations", "POST", newLocation)
        .then((stuff) => {
          console.log("then", stuff);
        })
        .catch((error) => {
          console.error("promise error", error);
        })
        .finally(() => {
          console.log("finally");
        });
    } else {
      setFormError("Add info to required fields");
    }
  };

  const addLocation = () => {
    console.log("add location");
  };

  useEffect(() => {
    console.log("get locations");
    locationRequest("http://localhost:4200/locations");
    console.log("get user warbands");
    warbandRequest("http://localhost:4200/userWarbands");
  }, []);

  return (
    <div>
      <h1>Location Add</h1>
      <div>
        <div>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="boon">Boon : </label>
          <input
            type="text"
            name="boon"
            id="boon"
            placeholder="Boon"
            value={boon}
            onChange={(e) => setBoon(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="curse">Curse : </label>
          <input
            type="text"
            name="curse"
            id="curse"
            placeholder="Curse"
            value={curse}
            onChange={(e) => setCurse(e.target.value)}
          />
        </div>
        <div>
          {locationIsLoading && <div>...loading...</div>}
          {locationError && (
            <div className="errorText">{locationError.message}</div>
          )}
          <label>Connections : </label>
          <select
            name="selectedConnection"
            id="selectedConnection"
            value={selectedConnection}
            onChange={(e) => {
              let con = e.target.value;
              console.log("selected connection", con);
              setSelectedConnection(con);
            }}
          >
            <option value="" selected>
              None
            </option>
            {locationData &&
              locationData.map((location) => {
                return (
                  <option key={location.id} value={location.id}>
                    {location.title}
                  </option>
                );
              })}
          </select>
          <button onClick={addLocation}>add</button>
        </div>
        <div>
          {warbandIsLoading && <div>...loading...</div>}
          {warbandError && (
            <div className="errorText">{warbandError.message}</div>
          )}
          <label htmlFor="warband">Controlling Warband : </label>
          <select
            name="warband"
            id="warband"
            value={controllingWarband}
            onChange={(e) => {
              setControllingWarband(e.target.value);
            }}
          >
            <option value="" selected>
              None
            </option>
            {warbandData &&
              warbandData.map((warband) => {
                return (
                  <option key={warband.id} value={warband.id}>
                    {warband.name} : {warband.typeName}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <label htmlFor="size">Size : </label>
          <label htmlFor="width">Width : </label>
          <input
            type="number"
            name="width"
            id="width"
            placeholder="Width"
            value={size.width}
            onChange={(e) => {
              setSize({ ...size, width: e.target.value });
            }}
          />
          <label htmlFor="height">Height : </label>
          <input
            type="number"
            name="height"
            id="height"
            placeholder="Height"
            value={size.height}
            onChange={(e) => {
              setSize({ ...size, height: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="size">Location : </label>
          <label htmlFor="x">X : </label>
          <input
            type="number"
            name="x"
            id="x"
            placeholder="X"
            value={location.x}
            onChange={(e) => {
              setLocation({ ...location, x: e.target.value });
            }}
          />
          <label htmlFor="y">Y : </label>
          <input
            type="number"
            name="y"
            id="y"
            placeholder="Y"
            value={location.y}
            onChange={(e) => {
              setLocation({ ...location, y: e.target.value });
            }}
          />
        </div>
      </div>
      <button onClick={addNewLocation} disabled={!formValid()}>
        Add New Location
      </button>
      {formError && <div className="errorText">{formError}</div>}
    </div>
  );
};

export default LocationAdd;
