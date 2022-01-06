import React from "react";
import "./Card.scss";
import ButtonTranslate from "./ButtonTranslate";
import { observer, inject } from "mobx-react";

const Card = inject(["dataStore"])(
  observer(({ dataStore }) => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-word">{dataStore.word}</div>
          <div className="card-transcription">{dataStore.transcription}</div>
          <div className="card-translation">
            <ButtonTranslate
              russian={dataStore.translation}
              onClick={dataStore.onClick}
              pressed={dataStore.isTranslationShown}
            />
          </div>
        </div>
      </div>
    );
  })
);

export default Card;
