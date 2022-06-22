import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import '../App.css'

import Question from "../Data";

const Bar = ({ increaseScore, decreaseScore }) => {
  return (
    <>
     
      <ProgressBar>
        <ProgressBar
          style={{ backgroundColor: "black" }}
          now={(increaseScore / Question.length) * 100}
          key={1}
        />
        <ProgressBar
          style={{ backgroundColor: "#717171" }}
          now={(increaseScore / Question.length) * 50}
          key={2}
        />
        <ProgressBar
          style={{ backgroundColor: "#adadad" }}
          now={(decreaseScore / Question.length) * 100}
          key={3}
        />
      </ProgressBar>
    </>
  );
};

export default Bar;
