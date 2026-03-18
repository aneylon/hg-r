import InteractiveMap from "../InteractiveMap/InteractiveMap";
import MapLocation from "../InteractiveMap/MapLocation";
import MapStyles from "../InteractiveMap/MapStyles";
import BorderLandsCharacter from "./BorderLandsCharacter";
import NewGame from "./NewGame";

const FiveAway = () => {
  const locations = [
    {
      id: 1,
      title: "The Chapel of the Martyrs",
      description: "A somber chapel dedicated to saints who died defending...",
      boon: (
        <>
          One warrior gains
          <strong>immunity to Fear for the next battle.</strong>
        </>
      ),
      curse: (
        <>
          If the hero carrying the blessing dies, the warband suffers
          <strong>–1 Leadership next battle.</strong>
        </>
      ),
      connections: [
        { id: 1, title: "another place", url: "/another" },
        { id: 2, title: "some place", url: "/some" },
      ],
    },
  ];
  return (
    <div>
      <h1>Five Away</h1>
      <NewGame />
      {/* <InteractiveMap /> */}
      <BorderLandsCharacter />
      <MapLocation
        title={locations[0].title}
        description={locations[0].description}
        boon={locations[0].boon}
        curse={locations[0].curse}
        connections={[
          { id: 1, title: "another place", url: "/another" },
          { id: 2, title: "some place", url: "/some" },
        ]}
      />
      <MapStyles locations={locations} />
    </div>
  );
};

export default FiveAway;
