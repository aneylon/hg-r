const About = () => {
  return (
    <div>
      <div>
        <h1>About</h1>
        <p>
          A project for solo role playing based on the ideas of{" "}
          <a
            className="externalLink"
            href="https://www.chaosium.com/pendragon-rpg/"
          >
            Pendragon
          </a>
          ,{" "}
          <a className="externalLink" href="https://www.bastionland.com/">
            Mythic Bastionland
          </a>
          ,{" "}
          <a
            className="externalLink"
            href="https://modiphius.us/collections/five-leagues-from-the-borderlands/products/five-leagues-from-the-borderlands"
          >
            5 Leagues from the Borderlands
          </a>{" "}
          and{" "}
          <a
            className="externalLink"
            href="https://modiphius.us/collections/five-parsecs-from-home/products/five-parsecs-from-home"
          >
            {" "}
            5 Parsecs from Home
          </a>
          .
        </p>
      </div>
      <div>
        <h3>Code</h3>
        <p>
          Project code can be found{" "}
          <a className="externalLink" href="https://github.com/aneylon/hg-r">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
