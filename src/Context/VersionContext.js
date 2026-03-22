import { createContext, useState, useEffect } from "react";

export const VersionContext = createContext();

const VersionContextProvider = (props) => {
  const [version, setVersion] = useState(null);

  const getVersion = () => {
    fetch("./version.json")
      .then((res) => {
        if (res.ok) return res.json();
        // TODO : handle unable to get version file
      })
      .then((ver) => {
        setVersion(ver.version);
      });
  };

  useEffect(() => {
    getVersion();
  }, []);

  return (
    <VersionContext.Provider value={version}>
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
