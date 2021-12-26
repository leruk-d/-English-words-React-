import React, { useContext } from "react";
import "./WordList.scss";
import TableRow from "./TableRow";
import EditableRow from "./EditableRow";
import { DataContext } from "../../Context/Context";

function WordList() {
  const { words } = useContext(DataContext);

  return (
    <div className="main_table">
      <table className="table">
        <caption className="table-name">Words List</caption>
        <thead>
          <tr>
            <th className="col"> Word</th>
            <th className="col">Transcription</th>
            <th className="col">Translate</th>
            <th className="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <EditableRow />
          {words.map((word) => (
            <TableRow
              key={word.id}
              word={word.english}
              transcription={word.transcription}
              translation={word.russian}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default WordList;
