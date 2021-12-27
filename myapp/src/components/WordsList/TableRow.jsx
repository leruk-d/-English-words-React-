import React, { useState } from "react";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
  const [pressed, setPressed] = useState(false);

  const [imputData, setImputData] = useState({
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

  const addImputData = (event) => {
    setImputData({
      ...imputData,
      [event.target.name]: event.target.value,
    });
  };

  const { id, word, transcription, translation } = imputData;

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
      //     console.log(imputData.word);
      //     console.log(imputData.transcription);
      //     console.log(imputData.translation);
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
        body: JSON.stringify({
          english: imputData.word,
          russian: imputData.translation,
          transcription: imputData.transcription,
          tags: [],
        }),
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
          setImputData(data);
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
              value={word}
              onChange={(e) => addImputData(e)}
              name="word"
            />
          </td>
          <td>
            <input
              className="row-input"
              type="text"
              value={transcription}
              onChange={(e) => addImputData(e)}
              name="transcription"
            />
          </td>
          <td>
            <input
              className="row-input"
              type="text"
              value={translation}
              onChange={(e) => addImputData(e)}
              name="translation"
            />
          </td>
        </>
      ) : (
        <>
          <td className="row-word" onClick={handleChange}>
            {imputData.word}
          </td>
          <td className="row-word" onClick={handleChange}>
            {imputData.transcription}
          </td>
          <td className="row-word" onClick={handleChange}>
            {imputData.translation}
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
