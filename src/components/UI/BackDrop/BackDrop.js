import React from "react";
import classes from "./BackDrop.module.css";

const backDrop = (props) => {
  return props.show ? (
    <div onClick={props.BDClick} className={classes.BackDrop}></div>
  ) : null;
};

export default backDrop;
