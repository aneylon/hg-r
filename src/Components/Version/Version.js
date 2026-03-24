import { useContext } from "react";
import { VersionContext } from "../../Context/VersionContext";

const Version = () => {
  const version = useContext(VersionContext);
  return (
    <div>
      <h1>Version : {version}</h1>
    </div>
  );
};
export default Version;
