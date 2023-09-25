import React from "react";
import classes from "./Info.module.css";
import Button from "../UI/Button";

const Info = () => {
  return (
    <div className={classes.text}>
      <div className={classes.relative}>
        <h1>
          Hey There, I am <font color="#facc15">Arul Gupta</font> <br />
        </h1>
        <font className={classes.light}>
          Front-end Web Developer and Cloud-Enthusiast
        </font>
        <br />
        <Button>Download Resume</Button> Not uploaded yet.
        <div className={classes.icons}>
          <a
            href="https://www.facebook.com/arul.gupta.9634"
            target="_blank"
            rel="noreferrer"
          >
            <i className="social-icon fab fa-facebook-f icon "></i>
          </a>
          <a
            href="https://twitter.com/ArulGupta8"
            target="_blank"
            rel="noreferrer"
          >
            <i className="social-icon fab fa-twitter icon"></i>
          </a>
          <a
            href="https://www.instagram.com/arul_gupta_5845/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="social-icon fab fa-instagram icon"></i>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <i className="social-icon fas fa-envelope icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
