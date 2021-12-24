import React, { useState, useCallback, useContext } from "react";
import Card from "../Card/Card";
import ButtonPrevious from "../ButtonPrevious/ButtonPrevious";
import ButtonNext from "../ButtonNext/ButtonNext";
import "./CardContainer.scss";
import DataContext from "../../Context/Context";

// const words = [
//   {
//     id: "peace",
//     english: "peace",
//     transcription: "[ piːs ]",
//     russian: "мир",
//     isTranslationShow: false,
//   },
//   {
//     id: "friendship",
//     english: "friendship",
//     transcription: "[ ˈfrendʃɪp ]",
//     russian: "дружба",
//     isTranslationShow: false,
//   },

//   {
//     id: "gum",
//     english: "gum",
//     transcription: "[ ɡʌm ]",
//     russian: "жвачка",
//     isTranslationShow: false,
//   },
// ];

function CardContainer(props) {
  const { words } = useContext(DataContext);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [data, updateTranslationState] = useState(words);
  const [wordsCount, setWordsCount] = useState(0);

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

  const addToWords = useCallback(
    () => setWordsCount(wordsCount + 1),
    [wordsCount]
  );

  const handleClickTranslation = (isTranslationShown) => {
    const dataCopy = [...data];
    dataCopy[selectedCardIndex].isTranslationShow =
      !dataCopy[selectedCardIndex].isTranslationShow;
    updateTranslationState(dataCopy);
    if (!isTranslationShown) {
      addToWords();
    }
  };

  return (
    <div className="cardContainer">
      <span className="wordsCount"> изучено {wordsCount} слов</span>
      <div className="oneCard">
        <ButtonPrevious
          onClick={handleClickPrev}
          disabled={selectedCardIndex === 0}
        />
        <Card
          word={words[selectedCardIndex].english}
          transcription={words[selectedCardIndex].transcription}
          translation={words[selectedCardIndex].russian}
          onClick={() =>
            handleClickTranslation(data[selectedCardIndex].isTranslationShow)
          }
          isTranslationShown={data[selectedCardIndex].isTranslationShow}
        ></Card>
        <ButtonNext
          onClick={handleClickNext}
          disabled={selectedCardIndex === words.length - 1}
        />
      </div>
      <span className="numberCard">
        {selectedCardIndex + 1}/{words.length}
      </span>
    </div>
  );
}

export default CardContainer;
