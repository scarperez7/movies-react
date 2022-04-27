import React from "react";
import Movies from "./components/Movie";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Movies defaultMovie="Avengers" />
      <footer className="fixed-bottom text-center mt-2 mb-3">
        <a
          href="https://github.com/scarperez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source code
        </a>
        {""} by Scarlett Perez
      </footer>
    </div>
  );
}

export default App;
