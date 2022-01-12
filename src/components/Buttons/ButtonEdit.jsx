import React from "react";
import "./ButtonEdit.scss";

function ButtonEdit(props) {
  return (
    <button onClick={props.onClick} className="btn-edit">
      {props.pressed === true ? "Save" : "Edit"}
    </button>
  );
}

export default ButtonEdit;
