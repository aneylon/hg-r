import { useContext } from "react";
import { VersionContext } from "../../Context/VersionContext";

const Version = () => {
  const version = "1.2.3";
  const ver = useContext(VersionContext);
  return (
    <div>
      <h1>Version : {ver}</h1>
    </div>
  );
};
export default Version;
