import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bg}></div>
      <img src="myself-1.png" />
    </div>
  );
};

export default Profile;
