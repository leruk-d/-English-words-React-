import React, { useState } from "react";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
  const [pressed, setPressed] = useState(false);

  const [imputData, setImputData] = useState({
    word: props.word,
    transcription: props.transcription,
    translation: props.translation,
  });

  const [errors, setErrors] = useState({
    word: false,
    transcription: false,
    translation: false,
  });

  const handleChange = () => {
    setPressed(!pressed);
  };

  const addImputData = (event) => {
    setImputData({
      ...imputData,
      [event.target.name]: event.target.value,
    });
  };

  const { word, transcription, translation } = imputData;

  const onlyLatinCharacters = (value) => {
    return /^[a-zA-Z]+$/.test(value);
  };

  const onlyRussianCharacters = (value) => {
    return /^[\u0400-\u04FF]+$/.test(value);
  };

  const handleSave = () => {
    if (!onlyLatinCharacters(imputData.word)) {
      setErrors({ ...errors, word: "Введите слово на английском языке" });
    } else if (!onlyRussianCharacters(imputData.translation)) {
      setErrors({ ...errors, translation: "Введите слово на русском языке" });
    } else {
      console.log(imputData.word);
      console.log(imputData.transcription);
      console.log(imputData.translation);
      setErrors({
        word: false,
        transcription: false,
        translation: false,
      });
    }
  };
  console.log(imputData);
  return (
    <tr className="row" key={props.id}>
      {pressed === true ? (
        <>
          <td>
            <input
              className="row-input"
              type="text"
              onClick={handleChange}
              value={word}
              onChange={(e) => addImputData(e)}
              name="word"
            />
          </td>
          <td>
            <input
              className="row-input"
              type="text"
              onClick={handleChange}
              value={transcription}
              onChange={(e) => addImputData(e)}
              name="transcription"
            />
          </td>
          <td>
            <input
              className="row-input"
              type="text"
              onClick={handleChange}
              value={translation}
              onChange={(e) => addImputData(e)}
              name="translation"
            />
          </td>
        </>
      ) : (
        <>
          <td className="row-word" onClick={handleChange}>
            {props.word}
          </td>
          <td className="row-word" onClick={handleChange}>
            {props.transcription}
          </td>
          <td className="row-word" onClick={handleChange}>
            {props.translation}
          </td>
        </>
      )}
      <td>
        <div className="buttons">
          <ButtonEdit
            onClick={() => {
              handleChange();
              handleSave();
            }}
            pressed={pressed}
          />
          <ButtonDel />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
