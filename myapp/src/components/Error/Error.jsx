import React from "react";
import "./Error.scss";
import error404 from "../../assets/error404.png";

function Error() {
  return (
    <div className="error">
      <img className="errorImg" src={error404} alt="error" />
    </div>
  );
}

export default Error;
