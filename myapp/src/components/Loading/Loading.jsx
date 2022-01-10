import React from "react";
import "./Loading.scss";
import L6MI from "../../assets/L6MI.gif";

function Loading() {
  return (
    <div className="loading">
      <img className="loadingGif" src={L6MI} alt="loading" />
    </div>
  );
}

export default Loading;
