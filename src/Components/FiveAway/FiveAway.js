import InteractiveMap from "../InteractiveMap/InteractiveMap";
import MapStyles from "../InteractiveMap/MapStyles";
import NewGame from "./NewGame";

const FiveAway = () => {
  return (
    <div>
      <h1>Five Away</h1>
      <NewGame />
      <InteractiveMap />
      <MapStyles />
    </div>
  );
};

export default FiveAway;
