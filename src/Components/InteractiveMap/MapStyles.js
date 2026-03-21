import "./mapStyles.css";
import ToolTip from "./ToolTip";

const MapStyles = ({ locations }) => {
  return (
    <div>
      <h1>Map Styles</h1>

      <div className="mapHolder">
        <div className="townCircle" style={{ top: 50, left: 50 }}></div>

        <div
          className="townCircle"
          style={{ top: 100, left: 185, width: 125, height: 125 }}
        ></div>

        <div className="townCircle" style={{ bottom: 75, right: 100 }}>
          <ToolTip description={locations[0].description} />
        </div>
      </div>
    </div>
  );
};

export default MapStyles;
