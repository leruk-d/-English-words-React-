import React from "react";
import "./ButtonNext.scss";

function ButtonNext(props) {
  return (
    <span className="next" onClick={props.onClick}>
      next{" "}
    </span>
  );
}

export default ButtonNext;
