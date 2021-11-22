import React, { useState } from "react";
import "./ButtonEdit.scss";

function ButtonEdit(props) {
  return (
    <button onClick={props.onClick} className="btn-edit">
      {props.pressed === true ? "Cancel" : "Edit"}
    </button>
  );
}

export default ButtonEdit;
