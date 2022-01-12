import React, { useState } from "react";
import "./EditableRow.scss";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";

function EditableRow(props) {
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
      // console.log(inputData.word);
      // console.log(inputData.transcription);
      // console.log(inputData.translation);
      // setErrors({
      //   word: false,
      //   transcription: false,
      //   translation: false,
      // });
      fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          english: inputData.word,
          russian: inputData.translation,
          transcription: inputData.transcription,
          tags: [],
        }),
      })
        .then((response) => {
          setInputData({
            word: " ",
            translation: " ",
            transcription: "",
          });
          if (response.ok) {
            //Проверяем что код ответа 200
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(
          setErrors({
            word: false,
            transcription: false,
            translation: false,
          })
        )
        .catch((err) => console.log(err));
    }
  };

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
          <ButtonDel />
        </div>
      </td>
    </tr>
  );
}

export default EditableRow;
