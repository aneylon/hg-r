import LocationList from "./LocationList";

const Campaign = ({ campaignInfo }) => {
  return (
    <div>
      <h1>{campaignInfo.title}</h1>
      <div>
        <p>{campaignInfo.body}</p>
      </div>
      <div>
        <LocationList />
      </div>
    </div>
  );
};

export default Campaign;
