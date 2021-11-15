import React from "react";
import "./Input.scss";

function InputForWord(props) {
  return (
    <input className="addWord" placeholder="Enter">
      {props.value}
    </input>
  );
}

export default InputForWord;
