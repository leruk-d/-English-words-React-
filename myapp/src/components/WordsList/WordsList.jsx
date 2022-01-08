import React from "react";
import "./WordList.scss";
import TableRow from "./TableRow";
import EditableRow from "./EditableRow";
import { observer, inject } from "mobx-react";

// let words = [
//   { id: "peace", english: "peace", transcription: "[ piːs ]", russian: "мир" },
//   {
//     id: "friendship",
//     english: "friendship",
//     transcription: "[ ˈfrendʃɪp ]",
//     russian: "дружба",
//   },

//   { id: "gum", english: "gum", transcription: "[ ɡʌm ]", russian: "жвачка" },
// ];

const WordList = inject(["dataStore"])(
  observer(({ dataStore }) => {
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
            {dataStore.data.map((word) => (
              <TableRow
                key={word.id}
                id={word.id}
                word={word.english}
                transcription={word.transcription}
                translation={word.russian}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  })
);
export default WordList;
