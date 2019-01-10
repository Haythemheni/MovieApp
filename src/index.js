import React from "react";
import ReactDOM from "react-dom";
import MoviesList from "./moviesList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MoviesList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
