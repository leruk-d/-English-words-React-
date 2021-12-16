import React, {useState} from "react";
import "./Input.scss";
import ButtonDel from "../Buttons/ButtonDelete";
import ButtonAdd from "../Buttons/ButtonAdd";

function InputForWord(props) {
  const [imputData, setImputData]=useState({
word:"",
transcription:"",
translation:""
  });

  const addImputData=event=>
  setImputData({
    ...imputData,
    [event.target.name]:event.target.valuegit
  });
  const{ word,transcription,translation}=imputData;

  return (
      <tr className="rowAddWord">
      <td>
    <input className="addWord" placeholder="Enter" type="text" value={word} onChange={e=>addImputData(e)} name={word}/>
     </td>
          <td>
    <input className="addWord" placeholder="Enter" type="text" value={transcription} onChange={e=>addImputData(e)}name={transcription}/>
     </td>
          <td>
   <input className="addWord" placeholder="Enter"  type="text" value={translation} onChange={e=>addImputData(e)} name={translation} />
     </td>
       <td>
        <div className="buttons">
        <ButtonAdd/>
        <ButtonDel />
        </div>
      </td>
        </tr>
  );
}

export default InputForWord;
