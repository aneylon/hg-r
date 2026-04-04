import { createContext, useState, useEffect } from "react";

export const VersionContext = createContext();

const envVersion = process.env.REACT_APP_VERSION;
console.log(envVersion);

const VersionContextProvider = (props) => {
  const [version, setVersion] = useState(null);
  const [outOfDate, setOutOfDate] = useState("false");

  const getVersion = () => {
    fetch("./version.json")
      .then((res) => {
        if (res.ok) return res.json();
        // TODO : handle unable to get version file
      })
      .then((ver) => {
        let jsonVersion = ver.version;
        console.log(jsonVersion, envVersion);
        if (jsonVersion !== envVersion) {
          setOutOfDate("true");
          setVersion(ver.version);
        } else {
          setOutOfDate("false");
          setVersion(ver.version);
        }
      });
  };

  useEffect(() => {
    getVersion();
  }, []);

  return (
    <VersionContext.Provider value={{ version, outOfDate, setOutOfDate }}>
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
