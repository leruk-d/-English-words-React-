import React, { useState } from "react";
import "./ButtonEdit.scss";

function ButtonEdit() {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <button onClick={handleChange} className="btn-edit">
      {pressed === true ? "Cancel" : "Edit"}
    </button>
  );
}

export default ButtonEdit;
