import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";

const modal = (props) => {
  return (
    <div>
      <BackDrop show={props.show} BDClick={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default modal;
