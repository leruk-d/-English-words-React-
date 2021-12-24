// import React, { useState, useEffect } from "react";

// const DataContext = React.createContext();

// function DataContextProvider(props) {
//   const [words, setData] = useState([]);

//   useEffect(() => {
//     fetch("/api/words")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

//   return (
//     <DataContext.Provider value={{ words }}>
//       {props.children}
//     </DataContext.Provider>
//   );
// }

// export { DataContextProvider, DataContext };

import React from "react";

const DataContext = React.createContext();

export default DataContext;
