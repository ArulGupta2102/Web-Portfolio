import React from "react";
import classes from "./NavButtons.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavButtons = () => {
  return (
    <div className={classes.navbar}>
      <a href="">Home</a>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#project">Project</AnchorLink>
    </div>
  );
};

export default NavButtons;
