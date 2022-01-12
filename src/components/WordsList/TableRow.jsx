import React, { useState } from "react";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
  const [pressed, setPressed] = useState(false);

  const [inputData, setInputData] = useState({
    id: props.id,
    english: props.word,
    transcription: props.transcription,
    russian: props.translation,
    tags: [],
  });

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
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

  const { id, english, transcription, russian } = inputData;

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
    if (!onlyLatinCharacters(inputData.english)) {
      setErrors({ ...errors, english: "Введите слово на английском языке" });
      alert("Некоторые поля заполнены неправильно!");
    } else if (!onlyRussianCharacters(inputData.russian)) {
      setErrors({ ...errors, russian: "Введите слово на русском языке" });
      alert("Некоторые поля заполнены неправильно!");
    } else {
      //     console.log(inputData.word);
      //     console.log(inputData.transcription);
      //     console.log(inputData.translation);
      //     setErrors({
      //       word: false,
      //       transcription: false,
      //       translation: false,
      //     });
      //     handleChange();
      //   }
      // };

      fetch(`/api/words/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(inputData),
      })
        .then((response) => {
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
        .then((data) => {
          console.log(data);
          setInputData(data);
          handleChange();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (id) => {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((response) => {
      if (response.ok) {
        //Проверяем что код ответа 200
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    });
  };
  return (
    <tr className="row" key={props.id}>
      {pressed === true ? (
        <>
          <td>
            <input
              className="row-input"
              type="text"
              value={english}
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
              value={russian}
              onChange={(e) => addInputData(e)}
              name="translation"
            />
          </td>
        </>
      ) : (
        <>
          <td className="row-word" onClick={handleChange}>
            {inputData.english}
          </td>
          <td className="row-word" onClick={handleChange}>
            {inputData.transcription}
          </td>
          <td className="row-word" onClick={handleChange}>
            {inputData.russian}
          </td>
        </>
      )}
      <td>
        <div className="buttons">
          <ButtonEdit onClick={handleSave} pressed={pressed} />
          <ButtonDel onClick={() => handleDelete(id)} />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
