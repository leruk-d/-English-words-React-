import React, { useState } from "react";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";
import ButtonEdit from "../Buttons/ButtonEdit";
import "./TableRow.scss";

function TableRow(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <tr className="row" key={props.id}>
      {pressed === true ? (
        <>
          <td>
            <input
              className="row-input"
              value={props.word}
              onClick={handleChange}
            />
          </td>
          <td>
            <input
              className="row-input"
              value={props.transcription}
              onClick={handleChange}
            />
          </td>
          <td>
            <input
              className="row-input"
              value={props.translation}
              onClick={handleChange}
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
          <ButtonEdit onClick={handleChange} />
          <ButtonDel />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
