import React from "react";
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
  return !props.pressed ? (
    <button className="button" onClick={props.onClick}>
      Проверить
    </button>
  ) : (
    <div onClick={props.onClick}>{props.russian}</div>
  );
}

export default ButtonTranslate;
