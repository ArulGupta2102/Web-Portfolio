import React from "react";
import classes from "./ProjectItem.module.css";
import Button from "../UI/Button";

const ProjectItem = (props) => {
  return (
    <li className={classes.dec}>
      <div className={classes.img}>
        <img src={props.pic} />
        <figcaption>{props.heading}</figcaption>
      </div>
      <div className={classes.info}>
        <div className={classes.about}>{props.about}</div>
        <Button className={classes.style}>
          <a href={props.site} target="_blank">
            Site Link
          </a>
        </Button>
        <Button className={classes.style}>
          <a href={props.repo} target="_blank">
            GitHub Repo Link
          </a>
        </Button>
      </div>
    </li>
  );
};

export default ProjectItem;
