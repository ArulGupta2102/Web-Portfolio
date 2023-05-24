import React from "react";
import classes from "./Header.module.css";
import NavButtons from "./NavButtons/NavButtons";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Portfolio</h1>
      <NavButtons />
    </div>
  );
};

export default Header;
