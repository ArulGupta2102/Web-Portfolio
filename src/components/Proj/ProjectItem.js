import React from "react";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <li className={classes.dec}>
      <div className={classes.img}>
        <img src={props.pic} />
        <figcaption>{props.heading}</figcaption>
      </div>
      <div className={classes.info}>
        <div className={classes.about}>{props.about}</div>
        <div className={classes.site}>
          <a href={props.site} target="_blank">
            Site Link
          </a>
        </div>
        <div className={classes.repo}>
          <a href={props.repo} target="_blank">
            GitHub Repo Link
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
