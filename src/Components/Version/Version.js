import { useContext } from "react";
import { VersionContext } from "../../Context/VersionContext";

const Version = () => {
  const { version, outOfDate } = useContext(VersionContext);
  console.log(outOfDate);
  return (
    <div>
      <h1>Version : {version}</h1>
      <h2>Out of Date : {outOfDate}</h2>
    </div>
  );
};
export default Version;
