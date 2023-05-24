import React from "react";
import classes from "./About.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
// import Card from "../UI/Card";

const About = () => {
  return (
    <div className={classes.about} id="about">
      <div className={classes.head}>
        <div>About Me</div>
        {/* <FontAwesomeIcon
          icon={faCircleChevronDown}
          size="2x"
          className={classes.button}
        /> */}
      </div>
      <p>
        Hello there! My name is Arul Gupta, and I'm thrilled to have you visit
        my web portfolio. I am a passionate front-end web developer and a cloud
        enthusiast. My work is driven by a passion for creativity and a
        dedication to delivering exceptional results. I enjoy collaborating with
        talented individuals and organizations from diverse industries, bringing
        technical expertise to every project. Whether it's designing, writing,
        or problem-solving, I strive for excellence in all that I do. Take a
        look around and discover the simplicity and impact of my work. Let's
        create something amazing together!
      </p>
    </div>
  );
};

export default About;
