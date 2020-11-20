import React from "react";

import Button from "@material-ui/core/Button";

import StartBtn from "./start";
import EraseBtn from "./erase";

function Input() {
  return (
    <div className="inputs">
      <h1>Inputs</h1>
      <StartBtn />
      <EraseBtn />
    </div>
  );
}

export default Input;
