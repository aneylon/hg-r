import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const LocationList = () => {
  const { data, error, isLoading, request } = useFetch();

  useEffect(() => {
    request("http://localhost:4200/locations");
  }, []);

  return (
    <div>
      <h1>Location List</h1>

      {isLoading && <div className="loading">...loading...</div>}

      {error && <div className="errorText">{error.message}</div>}

      {data && (
        <ul>
          {data.map((location) => {
            return (
              <li key={location.id}>
                <p>{location.title}</p>
                <p>{location.description}</p>
                <p>boon: {location.boon}</p>
                <p>curse: {location.curse}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LocationList;
