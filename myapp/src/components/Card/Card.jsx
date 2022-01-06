import React from "react";
import "./Card.scss";
import ButtonTranslate from "./ButtonTranslate";
import { observer, inject } from "mobx-react";

const Card = inject(["dataStore"])(
  observer(({ dataStore, ...props }) => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-word">{dataStore.data.word}</div>
          <div className="card-transcription">
            {dataStore.data.transcription}
          </div>
          <div className="card-translation">
            <ButtonTranslate
              russian={dataStore.data.translation}
              onClick={props.onClick}
              pressed={props.isTranslationShown}
            />
          </div>
        </div>
      </div>
    );
  })
);

export default Card;
