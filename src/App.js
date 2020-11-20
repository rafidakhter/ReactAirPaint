import React from "react";

import "./App.css";

import AppEngine from "./components/AppEngine";

//importing components:
import Inputs from "./components/inputs";
import Screen from "./components/screen";

function App() {
  return (
    <div className="App">
      <h1>Air Paint</h1>
      <AppEngine />
    </div>
  );
}

export default App;
