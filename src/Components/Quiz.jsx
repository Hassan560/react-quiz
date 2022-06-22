import React from "react";
import { useState } from "react";

import "../App.css";

// data
import Question from "../Data";

import MultipleChoice from "./MultipleChoice";
import Bar from "./Bar";

import ProgressBar from "react-bootstrap/esm/ProgressBar";

import { QuizContainer } from "../Components/Styles/Quiz";
import QuesHeader from "./QuesHeader";
import {
  Button,
  ButtonContainer,
  CorrectTitle,
  InCorrectTitle,
} from "./Styles/MultipleChoice";

const Quiz = () => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const [correctText, setCorrectText] = useState(false);
  const [incorrectText, setIncorrectText] = useState(false);
  const [increaseScore, setIncreaseScore] = useState(0);
  const [decreaseScore, setDecreaseScore] = useState(20);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClicked = (e) => {
    if (e === Question[currentQuestion].correct_answer) {
      setIncreaseScore(increaseScore + 1);
      setNextQuestion(true);
      setCorrectText(true);
    } else {
      setDecreaseScore(decreaseScore - 1);
      setNextQuestion(true);
      setIncorrectText(true);
      setCorrectText(false);
    }
  };

  const nextQues = () => {
    setCurrentQuestion(currentQuestion + 1);
    setNextQuestion(false);
    setCorrectText(false);
    setIncorrectText(false);
  };

  const finalQuiz = () => {
    alert(increaseScore >= 60 ? "YOU WON 👍" : "YOU LOST 👎");
    window.location.reload();
  };

  return (
    <>
      <div>
        <ProgressBar
          className="progress"
          now={currentQuestion + 1}
          key={1}
          max={Question.length}
        />
      </div>
      <QuizContainer>
        <QuesHeader
          question={Question[currentQuestion]}
          questionLength={Question.length}
          currentQuestion={currentQuestion}
        />
        <MultipleChoice
          handleClicked={handleClicked}
          correctText={correctText}
          question={Question[currentQuestion]}
        />
        <CorrectTitle>{correctText ? "Correct" : null}</CorrectTitle>
        <InCorrectTitle>{incorrectText ? "Sorry" : null}</InCorrectTitle>
        <ButtonContainer>
          {nextQuestion && (
            <Button
              onClick={
                Question.length - 1 === currentQuestion ? finalQuiz : nextQues
              }
            >
              {Question.length - 1 === currentQuestion
                ? "Finish Check Result"
                : "Next Question"}
            </Button>
          )}
        </ButtonContainer>

        <div className="progress__Container">
          <div className="score">
            <p>
              Score:
              {parseFloat((increaseScore / Question.length) * 100).toFixed(0)}%
            </p>
            <p>
              Max Score:
              {parseFloat((decreaseScore / Question.length) * 100).toFixed(0)}%
            </p>
          </div>
          <div className="progressbar">
            <Bar increaseScore={increaseScore} decreaseScore={decreaseScore} />
            <div
              className="fill"
              style={{
                background: `
                linear-gradiant(
                  to right,
                  #000 56%)
                  `,
              }}
            />
          </div>
        </div>
      </QuizContainer>
    </>
  );
};

export default Quiz;
