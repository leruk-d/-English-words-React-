import React, { useState } from "react";
import "./EditableRow.scss";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";

function EditableRow(props) {
  const [imputData, setImputData] = useState({
    word: "",
    transcription: "",
    translation: "",
  });

  const [errors, setErrors] = useState({
    word: false,
    transcription: false,
    translation: false,
  });

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
      alert("Некоторые поля заполнены неправильно!");
    } else if (!onlyRussianCharacters(imputData.translation)) {
      setErrors({ ...errors, translation: "Введите слово на русском языке" });
      alert("Некоторые поля заполнены неправильно!");
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

  const validate = () => {
    const { word, transcription, translation } = imputData;
    return word.trim() && transcription.trim() && translation.trim();
  };

  return (
    <tr className="rowAddWord">
      <td>
        <input
          placeholder="Enter"
          type="text"
          value={word}
          onChange={(e) => addImputData(e)}
          name="word"
          className={word.length ? "addWord" : "addWord-red"}
        />
      </td>
      <td>
        <input
          placeholder="Enter"
          type="text"
          value={transcription}
          onChange={(e) => addImputData(e)}
          name="transcription"
          className={transcription.length ? "addWord" : "addWord-red"}
        />
      </td>
      <td>
        <input
          placeholder="Enter"
          type="text"
          value={translation}
          onChange={(e) => addImputData(e)}
          name="translation"
          className={translation.length ? "addWord" : "addWord-red"}
        />
      </td>
      <td>
        <div className="buttons">
          <ButtonAdd disabled={!validate()} save={handleSave} />
          <ButtonDel />
        </div>
      </td>
    </tr>
  );
}

export default EditableRow;
