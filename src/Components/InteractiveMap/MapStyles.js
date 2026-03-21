import "./mapStyles.css";
import ToolTip from "./ToolTip";

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

        <div className="townCircle" style={{ bottom: 75, right: 100 }}>
          <ToolTip
            description={
              <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit placeat molestiae possimus consequatur iusto deleniti
                neque quae, pariatur vero reiciendis similique laborum veritatis
                repudiandae ea soluta facilis ratione doloremque quam?
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MapStyles;
