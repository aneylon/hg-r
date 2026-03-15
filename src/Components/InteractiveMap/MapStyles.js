import "./mapStyles.css";

const MapStyles = () => {
  return (
    <div>
      <h1>Map Styles</h1>
      <div className="mapHolder">
        <div className="townCircle" style={{ top: 50, left: 50 }}></div>

        <div
          className="townCircle"
          style={{ top: 100, left: 185, width: 125, height: 125 }}
        ></div>

        <div className="townCircle" style={{ bottom: 75, right: 100 }}></div>
      </div>
    </div>
  );
};

export default MapStyles;
