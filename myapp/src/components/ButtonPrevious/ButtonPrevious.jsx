import React from "react";
import "./ButtonPrevious.scss";

function ButtonPrevious(props) {
  return (
    <div className="prev">
      <span
        className={props.disabled ? "disabled" : ""}
        onClick={props.onClick}
      >
        prev
      </span>
    </div>
  );
}

export default ButtonPrevious;
