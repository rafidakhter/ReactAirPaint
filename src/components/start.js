import React from "react";

import Button from "@material-ui/core/Button";

const StartBtn = ({ start, setStart }) => {
  const startBtnHandler = () => {
    setStart(!start);
  };
  return (
    <Button onClick={startBtnHandler} variant="contained" color="primary">
      Erase
    </Button>
  );
};

export default StartBtn;
