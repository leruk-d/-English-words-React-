import React from "react";
import "./ButtonNext.scss";

function ButtonNext(props) {
  return (
    <div className="next">
      <span
        className={props.disabled ? "disabled" : ""}
        onClick={props.onClick}
      >
        next
      </span>
    </div>
  );
}

export default ButtonNext;
