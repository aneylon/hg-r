const InteractiveMap = () => {
  return (
    <div>
      <h1>Interactive Map</h1>
      <div>
        <img
          src="SimpleExampleTown.png"
          alt="Simple Example Town"
          useMap="#myMap"
        />
        <map name="myMap">
          <area
            shape="rect"
            coords="45,45,145,145"
            href="stuff.html"
            alt="stuff"
            onClick={() => console.log("Rect it!")}
          />
          <area
            shape="circle"
            coords="200, 200, 45"
            href="things.html"
            alt="things"
            onClick={() => console.log("circle them wagons")}
          />
        </map>
      </div>
    </div>
  );
};

export default InteractiveMap;
