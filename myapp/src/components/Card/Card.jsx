import React from "react";
import "./Card.scss";
import ButtonTranslate from "./ButtonTranslate";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-word">{props.word}</div>
        <div className="card-transcription">{props.transcription}</div>
        <div className="card-translation">
          <ButtonTranslate russian={props.translation} />
        </div>
      </div>
    </div>
  );
}

export default Card;
