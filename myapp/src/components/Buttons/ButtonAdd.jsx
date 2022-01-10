import React from "react";
import "./ButtonAdd.scss";

function ButtonAdd(props) {
  return (
    <button className="btn-add" onClick={props.save} disabled={props.disabled}>
      Add
    </button>
  );
}

export default ButtonAdd;
