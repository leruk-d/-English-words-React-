import React from "react";
import "./ButtonPrevious.scss";

function ButtonPrevious(props) {
  return (
    <span className="prev" onClick={props.onClick}>
      prev
    </span>
  );
}

export default ButtonPrevious;
