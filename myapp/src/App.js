import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
        <div className="main">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/logo">
                <WordsList className="table" />
              </Route>
              <Route exact path="/wordsList">
                <WordsList className="table" />
              </Route>
              <Route exact path="/game">
                <CardContainer className="card" />
              </Route>
              <Route path="/">
                <WordsList className="table" />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <Footer className="footer" />
    </BrowserRouter>
  );
}

export default App;
