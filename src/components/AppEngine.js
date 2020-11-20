import React, { useState } from "react";
import Inputs from "./inputs";
import Screen from "./screen";

const AppEngine = () => {
  const [start, setStart] = useState(false);
  const [erase, setErase] = useState(false);
  const [display, setDisplay] = useState("Display Off");
  //const [cordinates, setCordinates] = useState([]);

  return (
    <div>
      <Screen />
      <Inputs />
    </div>
  );
};

export default AppEngine;

/*
      <Inputs
        start={start}
        setStart={setStart}
        erase={erase}
        setErase={setErase}
      />;*/
