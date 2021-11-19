import React from "react";
import "./WordList.scss";
import TableRow from "./TableRow";

function WordList() {
  return (
    <div className="main_table">
      <table class="table">
        <caption className="table-name">Words List</caption>
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
export default WordList;
