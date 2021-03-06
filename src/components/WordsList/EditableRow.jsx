import React, { useState } from "react";
import "./EditableRow.scss";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";
import { observer, inject } from "mobx-react";

const EditableRow = inject(["dataStore"])(
  observer(({ dataStore }) => {
    const [inputData, setInputData] = useState({
      word: "",
      transcription: "",
      translation: "",
    });

    const [errors, setErrors] = useState({
      word: false,
      transcription: false,
      translation: false,
    });

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
      if (!onlyLatinCharacters(inputData.word)) {
        setErrors({ ...errors, word: "Введите слово на английском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else if (!onlyRussianCharacters(inputData.translation)) {
        setErrors({ ...errors, translation: "Введите слово на русском языке" });
        alert("Некоторые поля заполнены неправильно!");
      } else {
        dataStore.addNewWord(inputData).then(() => {
          setInputData({
            word: " ",
            translation: " ",
            transcription: "",
          });
        });
      }
    };

    const handleDelete = () =>
      setInputData({
        word: " ",
        translation: " ",
        transcription: "",
      });
    const validate = () => {
      const { word, transcription, translation } = inputData;
      return word.trim() && transcription.trim() && translation.trim();
    };

    return (
      <tr className="rowAddWord">
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={word}
            onChange={(e) => addInputData(e)}
            name="word"
            className={word.length ? "addWord" : "addWord-red"}
          />
        </td>
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={transcription}
            onChange={(e) => addInputData(e)}
            name="transcription"
            className={transcription.length ? "addWord" : "addWord-red"}
          />
        </td>
        <td>
          <input
            placeholder="Enter"
            type="text"
            value={translation}
            onChange={(e) => addInputData(e)}
            name="translation"
            className={translation.length ? "addWord" : "addWord-red"}
          />
        </td>
        <td>
          <div className="buttons">
            <ButtonAdd disabled={!validate()} save={handleSave} />
            <ButtonDel onClick={handleDelete} />
          </div>
        </td>
      </tr>
    );
  })
);

export default EditableRow;
