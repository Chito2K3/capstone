// import { NavLink } from "react-router-dom";

import classes from "./MealsNavigation.module.css";

function MealsNavigation(props) {
  return (
    <section className={classes.filtermeals}>
      <h1>{props.title}</h1>
      {props.message}
    </section>
  );
}

export default MealsNavigation;
