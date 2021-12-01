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
              <Route exact path="/">
                <WordsList />
              </Route>
              <Route exact path="/wordsList">
                <WordsList />
              </Route>
              <Route exact path="/game" component={CardContainer} />
              <Route exact path="/">
                <WordsList />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
