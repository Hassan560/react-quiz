import React from "react";
import { useState } from "react";

import "../App.css";

// data
import Question from "../Data";

import MultipleChoice from "./MultipleChoice";
import Star from "./Star";
import Bar from "./Bar";

import ProgressBar from "react-bootstrap/esm/ProgressBar";

import {
  QuizContainer,
  Title,
  Para,
  Progress,
} from "../Components/Styles/Quiz";

const Quiz = () => {
  const [increaseScore, setIncreaseScore] = useState(0);
  const [decreaseScore, setDecreaseScore] = useState(20);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let starLevel = 0;
  if (Question[currentQuestion].difficulty === "easy") {
    starLevel = 1;
  } else if (Question[currentQuestion].difficulty === "medium") {
    starLevel = 2;
  } else if (Question[currentQuestion].difficulty === "hard") {
    starLevel = 3;
  }

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
        <Title>
          Question {currentQuestion + 1} of {Question.length}
        </Title>
        <Para>
          Category:{decodeURIComponent(Question[currentQuestion].category)}
        </Para>
        <div>
          <Star starLevel={starLevel} />
        </div>
        <div className="Question">
          <p>{decodeURIComponent(Question[currentQuestion].question)}</p>
        </div>

        <MultipleChoice
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setIncreaseScore={setIncreaseScore}
          increaseScore={increaseScore}
          setDecreaseScore={setDecreaseScore}
          decreaseScore={decreaseScore}
        />

        <div className="progress__Container">
          <div className="score">
            <p>Score: {(increaseScore / Question.length) * 100}%</p>
            <p>
              Max Score: {(decreaseScore / Question.length) * 100}%
            </p>
          </div>

          <div className="progressbar">
            {/* <Bar increaseScore={increaseScore} decreaseScore={decreaseScore} /> */}
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
