import React from "react";
import "./ButtonDelete.scss";

function ButtonDel(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      Delete
    </button>
  );
}

export default ButtonDel;
