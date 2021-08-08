import classes from "./Dropdown.module.css";
import React, { useEffect, useRef, useState } from "react";
import DropdownSVG from "../icons/DropdownSVG";
import classNames from "classnames";

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef();

  // const applyChanges = (newItem) => {
  //   props.onChange && props.onChange(newItem);
  // };
  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e);
      console.log(dropdownRef.current);
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div ref={dropdownRef} className={classes.dd_container}>
      <div
        style={props.DDInput}
        className={classNames(
          classes.dd_input,
          isActive && classes.dd_input_click
        )}
        // className={classes.dd_input}
        onClick={() => setIsActive(!isActive)}
      >
        {props.icon}
        <div className={classes.dd_text}>
          {props.value ? props.value : props.label}
        </div>

        <DropdownSVG
          style={props.DDSvg}
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <div
        style={props.DDOptions}
        className={classNames(
          classes.dd_options,
          isActive && classes.dd_options_active
        )}
      >
        {props.options.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              props.onChange(item.label);
              setIsActive(!isActive);
            }}
            style={props.DDItem}
            className={classNames(
              classes.dd_item,
              !item.logo && classes.dd_item_no_img
            )}
          >
            {item.logo ? <img src={item.logo} alt={item.label} /> : null}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
