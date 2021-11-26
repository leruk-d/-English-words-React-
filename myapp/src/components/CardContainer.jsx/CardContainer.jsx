import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import ButtonPrevious from "../ButtonPrevious/ButtonPrevious";
import ButtonNext from "../ButtonNext/ButtonNext";
import "./CardContainer.scss";

const words = [
  {
    id: "peace",
    english: "peace",
    transcription: "[ piːs ]",
    russian: "мир",
    isTranslationShow: false,
  },
  {
    id: "friendship",
    english: "friendship",
    transcription: "[ ˈfrendʃɪp ]",
    russian: "дружба",
    isTranslationShow: false,
  },

  {
    id: "gum",
    english: "gum",
    transcription: "[ ɡʌm ]",
    russian: "жвачка",
    isTranslationShow: false,
  },
];

function CardContainer(props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [data, updateTranslationState] = useState(words);

  const handleClickNext = () => {
    const newIdx = selectedCardIndex + 1;
    if (newIdx < words.length) {
      setSelectedCardIndex(newIdx);
    }
  };

  const handleClickPrev = () => {
    const newIndex = selectedCardIndex - 1;
    if (newIndex >= 0) {
      setSelectedCardIndex(newIndex);
    }
  };

  const handleClickTranslation = () => {
    const dataCopy = [...data];
    dataCopy[selectedCardIndex].isTranslationShow =
      !dataCopy[selectedCardIndex].isTranslationShow;
    updateTranslationState(dataCopy);
  };

  useEffect(() => {
    console.log(words.length);
  }, []);

  return (
    <div className="cardContainer">
      <div className="oneCard">
        <ButtonPrevious onClick={handleClickPrev} />
        <Card
          word={words[selectedCardIndex].english}
          transcription={words[selectedCardIndex].transcription}
          translation={words[selectedCardIndex].russian}
          onClick={handleClickTranslation}
          isTranslationShown={data[selectedCardIndex].isTranslationShow}
        ></Card>
        <ButtonNext onClick={handleClickNext} />
      </div>
      <span className="numberCard">
        {selectedCardIndex + 1}/{words.length}
      </span>
    </div>
  );
}

export default CardContainer;