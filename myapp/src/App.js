import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WordsList from "./components/WordsList/WordsList";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main"></div>
      <CardContainer />
      <WordsList className="table" />
    </div>
  );
}

export default App;
