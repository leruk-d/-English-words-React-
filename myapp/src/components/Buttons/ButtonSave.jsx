import React from "react";
import "./ButtonSave.scss";

function ButtonSave(props) {
  return (
    <button className="btn-save" onClick={props.onClick}>
      Save
    </button>
  );
}

export default ButtonSave;
