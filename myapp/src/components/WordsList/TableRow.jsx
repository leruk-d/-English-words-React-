import React, { useState } from "react";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";
import { observer, inject } from "mobx-react";
import ButtonSave from "../Buttons/ButtonSave";

const TableRow = inject(["dataStore"])(
  observer(({ dataStore, ...props }) => {
    const [pressed, setPressed] = useState(false);

    const [inputData, setInputData] = useState({
      id: props.id,
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

    const addInputData = (event) => {
      setInputData({
        ...inputData,
        [event.target.name]: event.target.value,
      });
    };

    const { word, transcription, translation } = inputData;

    const onlyLatinCharacters = (value) => {
      return /^[a-zA-Z]+$/.test(value);
    };

    const onlyRussianCharacters = (value) => {
      return /^[\u0400-\u04FF]+$/.test(value);
    };

    const handleSave = () => {
      if (!pressed) {
        handleChange();
        return;
      }
      if (!onlyLatinCharacters(inputData.word)) {
        setErrors({ ...errors, word: "Введите слово на английском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else if (!onlyRussianCharacters(inputData.translation)) {
        setErrors({ ...errors, translation: "Введите слово на русском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else {
        dataStore.updateWord(inputData, props.id);
        setErrors({
          word: false,
          transcription: false,
          translation: false,
        });
        handleChange();
      }
    };
    const handleDelete = () => dataStore.deleteWord(props.id);

    return (
      <tr className="row" key={props.id}>
        {pressed === true ? (
          <>
            <td>
              <input
                className="row-input"
                type="text"
                value={word}
                onChange={(e) => addInputData(e)}
                name="word"
              />
            </td>
            <td>
              <input
                className="row-input"
                type="text"
                value={transcription}
                onChange={(e) => addInputData(e)}
                name="transcription"
              />
            </td>
            <td>
              <input
                className="row-input"
                type="text"
                value={translation}
                onChange={(e) => addInputData(e)}
                name="translation"
              />
            </td>
          </>
        ) : (
          <>
            <td className="row-word" onClick={handleChange}>
              {inputData.word}
            </td>
            <td className="row-word" onClick={handleChange}>
              {inputData.transcription}
            </td>
            <td className="row-word" onClick={handleChange}>
              {inputData.translation}
            </td>
          </>
        )}
        <td>
          <div className="buttons">
            <ButtonEdit onClick={handleChange} pressed={pressed} />
            {pressed === true ? <ButtonSave onClick={handleSave} /> : ""}
            <ButtonDel onClick={() => handleDelete(props.id)} />
          </div>
        </td>
      </tr>
    );
  })
);
export default TableRow;
