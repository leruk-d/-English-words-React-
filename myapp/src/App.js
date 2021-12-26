import React, { useContext } from "react";
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
import { DataContext } from "./Context/Context";
import Loading from "./components/Loading/Loading";

function App() {
  const { isLoading, error } = useContext(DataContext);
   if (error) {
            return <p>{error.message}</p>;
        }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <main className="main">
          <Router>
            <Header />
            <Switch>
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
