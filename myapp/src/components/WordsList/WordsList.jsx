import React from 'react'
import './WordList.scss'
import ButtonDel from '../Buttons/ButtonDelete'
import ButtonAdd from '../Buttons/ButtonAdd'
import ButtonEdit from '../Buttons/ButtonEdit'

let words = [
    {
        id: 'peace',
        english: 'peace',
        transcription: '[ piːs ]',
        russian: 'мир',
    },
    {
        id: 'friendship',
        english: 'friendship',
        transcription: '[ ˈfrendʃɪp ]',
        russian: 'дружба',
    },
    { id: 'gum', english: 'gum', transcription: '[ ɡʌm ]', russian: 'жвачка' },
]

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
                    {words.map((word, i) => (
                        <tr key={word.id}>
                            <td>
                                {i === 0 ? (
                                    <input value={word.english} />
                                ) : (
                                    word.english
                                )}
                            </td>
                            <td>
                                {i === 0 ? (
                                    <input value={word.transcription} />
                                ) : (
                                    word.transcription
                                )}
                            </td>
                            <td>
                                {i === 0 ? (
                                    <input value={word.russian} />
                                ) : (
                                    word.russian
                                )}
                            </td>
                            <td>
                                <div className="buttons">
                                    {i === 0 && <ButtonAdd />}
                                    <ButtonEdit />
                                    <ButtonDel />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default WordList
