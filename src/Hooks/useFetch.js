import { VersionContext } from "../Context/VersionContext";

const { useState, useContext } = require("react");

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const { setOutOfDate } = useContext(VersionContext);

  const request = async (url, method, body) => {
    setIsLoading(true);

    // TODO : Try / Catch version checking

    let envVersion = process.env.REACT_APP_VERSION;
    let versionRequest = await fetch("./version.json");
    let json = await versionRequest.json();
    let version = json.version;

    console.log({ envVersion, version });
    if (version !== envVersion) {
      console.log("version mismatch", "stop it!");
      // TODO : set version context out of date
    } else {
      console.log("version match", "go ahead");
      let options = {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application-json",
        },
      };
      // TODO : Add body if not 'GET'
      // TODO : Add auth header

      // TODO : Wrap in try catch?
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          let responseData = await response.json();
          setData(responseData);
          setIsLoading(false);
          return responseData;
        } else {
          console.error(response.message);
          setError(response.message);
          setIsLoading(false);
          throw new Error(response.message);
        }
      } catch (error) {
        console.error("Fetch error", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { error, data, isLoading, request };
};

export default useFetch;
