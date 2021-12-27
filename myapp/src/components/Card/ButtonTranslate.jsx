import React, { useEffect, useRef } from "react";
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
  const buttonTranslateRef = useRef();

  useEffect(() => {
    if (buttonTranslateRef?.current) {
      buttonTranslateRef?.current?.focus?.();
    }
  }, [buttonTranslateRef?.current]);
  return !props.pressed ? (
    <button ref={buttonTranslateRef} className="button" onClick={props.onClick}>
      Проверить
    </button>
  ) : (
    <div onClick={props.onClick}>{props.russian}</div>
  );
}

export default ButtonTranslate;
