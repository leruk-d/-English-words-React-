import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WordsList from "./components/WordsList/WordsList";
import CardContainer from "./components/CardContainer/CardContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/Words List">
              <WordsList className="table" />
            </Route>
            <Route path="/cards">
              <CardContainer />
            </Route>
            <Route path="/">
              <WordsList className="table" />
            </Route>
          </Switch>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
