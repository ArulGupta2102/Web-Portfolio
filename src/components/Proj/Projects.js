import React from "react";
import classes from "./Projects.module.css";
import ProjectItem from "./ProjectItem";
import Zuimato from "../../assets/Zuimato.jpg";
import PigGame from "../../assets/Pig-Game.jpg";
// import Card from "../UI/Card";

const Projects = () => {
  const proj = {
    "Pig-Game": {
      site: "https://roll-n-hold.netlify.app/",
      pic: PigGame,
      about: `Created a Pig Game using only HTML JS & CSS`,
      githubRepo: "https://github.com/ArulGupta2102/Pig-Game.git",
    },
    ZuiMato: {
      site: "https://zuimato.netlify.app/",
      pic: Zuimato,
      about: `This is a front-end of an Online Food Ordering Site named Zuimato created with React.`,
      githubRepo:
        "https://github.com/ArulGupta2102/Online-FoodOrdering-Site.git",
    },
    "Price Compariion Engine": {
      site: "https://e-commerce-price-comp.netlify.app/",
      pic: "",
      about: `A Full-Stack website which compares prices for you from the leading e-commerce websites with the help of web-scrapping.(This project is still under development and not yet deployed).`,
      githubRepo: "https://github.com/ArulGupta2102/Price-Comparision-Engine",
    },
  };

  return (
    <div className={classes.proj} id="project">
      <h1>Personal Projects I Made So Far...</h1>
      <ul className={classes.list}>
        {Object.entries(proj).map((list) => {
          console.log(list);
          return (
            <ProjectItem
              heading={list[0]}
              about={list[1].about}
              site={list[1].site}
              repo={list[1].githubRepo}
              pic={list[1].pic}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
