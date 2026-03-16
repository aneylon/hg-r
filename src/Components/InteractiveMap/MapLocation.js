const MapLocation = ({ title, description, boon, curse, connections }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>
        <h2>Boon :</h2>
        <p>{boon}</p>
      </div>
      <div>
        <h2>Curse :</h2>
        <p>{curse}</p>
      </div>
      <div>
        <h3>Connections :</h3>
        <ul>
          {connections.map((connection) => {
            return (
              <li key={connection.id}>
                <a href={connection.url}></a>
                {connection.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MapLocation;
