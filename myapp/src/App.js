import React, { useState, useEffect } from "react";
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
import DataContext from "./Context/Context";

function App() {
  const [words, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then(
        (data) => {
          setData(data);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(true);
        }
      );
  }, []);
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <DataContext.Provider value={{ words }}>
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
          </DataContext.Provider>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
