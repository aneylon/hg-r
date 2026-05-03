import LocationList from "./LocationList";

const About = ({ aboutInfo }) => {
  return (
    <div>
      <h1>{aboutInfo.title}</h1>
      <div>
        <h2>{aboutInfo.subTitle}</h2>
        <p>{aboutInfo.body} </p>
      </div>
    </div>
  );
};

export default About;
