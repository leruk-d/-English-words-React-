import React, { useState, useEffect } from "react";

const DataContext = React.createContext();

function DataContextProvider(props) {
  const [words, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/words")
      .then((response) => {
        if (response.ok) {
          //Проверяем что код ответа 200
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз

  return (
    <DataContext.Provider value={{ words, isLoading, error }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
