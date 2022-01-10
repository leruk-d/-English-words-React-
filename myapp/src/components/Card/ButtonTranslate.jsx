import React, { useEffect, useRef } from "react";
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
  const buttonTranslateRef = useRef();

  //  ref проставляется в компоненте только после первого рендера, и в useEffect у меня этот ref используется, но он пока что не успел добавиться в компонент.
  // Чтобы избежать ошибки, нужно проверить в useEffect, что ref уже точно есть и с ним можно работать:

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
