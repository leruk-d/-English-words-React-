import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordsList from "./components/WordsList/WordsList";
import CardContainer from "./components/CardContainer/CardContainer";
import Error from "./components/Error/Error";
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
        <main className="main">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/logo">
                <WordsList className="table" />
              </Route>
              <Route exact path="/wordsList">
                <WordsList className="table" />
              </Route>
              <Route exact path="/game" component={CardContainer} />
              <Route exact path="/">
                <WordsList className="table" />
              </Route>
              <Route>
                <Error className="error404" />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
