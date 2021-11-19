import React, { useState } from "react";
import "./ButtonTranslate.scss";

function ButtonTranslate(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };
  return !pressed ? (
    <button className="button" onClick={handleChange}>
      Проверить
    </button>
  ) : (
    `${props.russian}`
  );
}

export default ButtonTranslate;