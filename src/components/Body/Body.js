import React from "react";
import Info from "./Info";
import Card from "../UI/Card";
import classes from "./Body.module.css";
import Profile from "./Profile";
import Projects from "../Proj/Projects";
import About from "../AboutMe/About";

const Body = () => {
  return (
    <>
      <Card className={classes.info}>
        <Info />
        <Profile />
      </Card>
      <About />
      <Projects id="project" />
    </>
  );
};

export default Body;
