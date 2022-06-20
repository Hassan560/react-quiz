import React from "react";

import "../App.css";

import Question from "../Data";
import { Button, FinalResultWrapper } from "./Styles/FinalResult";

const FinalResult = ({
  increaseScore,
  setIncreaseScore,
  setFinalResult,
  setCurrentQuestion,
  setDecreaseScore,
}) => {
  const endGame = () => {
    setFinalResult(false);
    setCurrentQuestion(0);
    setDecreaseScore(20);
    setIncreaseScore(0);
  };

  return (
    <FinalResultWrapper>
      <h2>FinalResult</h2>
      <h3>
        {increaseScore} out of {Question.length}-correct (
        {(increaseScore / Question.length) * 100}%)
      </h3>
      <Button onClick={() => endGame()}>Restart Game</Button>
    </FinalResultWrapper>
  );
};

export default FinalResult;
