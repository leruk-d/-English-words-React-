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

  const handleSave = () => {
    if (!imputData.word.match(/^[A-Za-z 0-9]*$/)) {
      setErrors({ ...errors, word: "Введите слово на английском языке" });
    } else if (!imputData.translation.match(/^[а-яё 0-9]+$/i)) {
      setErrors({ ...errors, translation: "Введите слово на русском языке" });
    } else {
      console.log("тут значения слов");
    }
  };

  const addImputData = (event) => {
    setImputData({
      ...imputData,
      [event.target.name]: event.target.value,
    });
  };

  const { word, transcription, translation } = imputData;

  let validate = () => {
    const { word, transcription, translation } = imputData;
    if (word.trim() && transcription.trim() && translation.trim()) {
      return true;
    }
    return false;
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
