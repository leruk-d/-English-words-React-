import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-word">{props.word}</div>
        <div className="card-transcription">{props.transcription}</div>
        <div className="card-translation">{props.translation}</div>
      </div>
    </div>
  );
}

export default Card;
