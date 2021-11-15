import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ButtonPrevious from './components/ButtonPrevious/ButtonPrevious';
import ButtonNext from './components/ButtonNext/ButtonNext';
import WordsList from './components/WordsList/WordsList'


let words=[
  {"id":"peace", "english":"peace", "transcription":"[ piːs ]", "russian":"мир" },
  {"id":"friendship", "english":"friendship", "transcription":"[ ˈfrendʃɪp ]","russian":"дружба" },
  {"id":"gum", "english":"gum", "transcription":"[ ɡʌm ]","russian":"жвачка"}
];

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="App-main">
      <ButtonPrevious/>
    {
      words.map((word)=>
        <Card key={word.id} word={word.english} transcription={word.transcription} translation={word.russian}></Card>
        )
    }
      <ButtonNext/>
      </div>
        <WordsList className="table" />
    </div>
    
  );
}

export default App;

