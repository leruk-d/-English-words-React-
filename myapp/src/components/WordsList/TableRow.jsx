import React from 'react';
import ButtonDel from "./Buttons/ButtonDelete";
import ButtonAdd from "./Buttons/ButtonAdd";
import ButtonEdit from "./Buttons/ButtonEdit";

let words=[
  {"id":"peace", "english":"peace", "transcription":"[ piːs ]", "russian":"мир" },
  {"id":"friendship", "english":"friendship", "transcription":"[ ˈfrendʃɪp ]","russian":"дружба" },
  {"id":"gum", "english":"gum", "transcription":"[ ɡʌm ]","russian":"жвачка"}
];

function TableRow() {
	{words.map((word, i) => (
            <tr key={word.id}>
              <td>{i === 0 ? <input value={word.english} /> : word.english}</td>
            <td>
             {i === 0 ? <input value={word.transcription} /> : word.transcription}
              </td>
              <td>
                {i === 0 ? <input value={word.russian} /> : word.russian}
              </td>
              <td>
                <div>
                  {i === 0 && <ButtonAdd />}
                   <ButtonEdit />
              <ButtonDel />
                </div>
              </td>
            </tr>
          ))}
	
}

export default TableRow;