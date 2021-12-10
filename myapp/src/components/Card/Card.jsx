import React, { useState } from "react";
import "./Card.scss";
import ButtonTranslate from "./ButtonTranslate";

function Card(props) {
  const [isAddedToCard, setIsAddedToCard] = useState(true);
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-word">{props.word}</div>
        <div className="card-transcription">{props.transcription}</div>
        <div className="card-translation">
          <ButtonTranslate
            russian={props.translation}
            onClick={() => {
              if (isAddedToCard) {
                props?.addToWords();
              }
              setIsAddedToCard(!isAddedToCard);
            }}
            pressed={props.isTranslationShown}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
