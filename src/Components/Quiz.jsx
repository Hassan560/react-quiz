import React from "react";
import { useState } from "react";

import "../App.css";

// data
import Question from "../Data";

import FinalResult from "./FinalResult";
import MultipleChoice from "./MultipleChoice";

import { Container } from "@material-ui/core";
import Bar from "./Bar";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

import { QuizContainer,Title,Para} from "../Components/Styles/Quiz";

const Quiz = () => {
  const [finalResult, setFinalResult] = useState(false);
  const [increaseScore, setIncreaseScore] = useState(0);
  const [decreaseScore, setDecreaseScore] = useState(20);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <div>
        <ProgressBar
          className="progress"
          now={(currentQuestion + 1) * 5}
          key={1}
        />
      </div>
      <Container>
        {finalResult ? (
          <FinalResult
            setIncreaseScore={setIncreaseScore}
            increaseScore={increaseScore}
            setFinalResult={setFinalResult}
            setCurrentQuestion={setCurrentQuestion}
            setDecreaseScore={setDecreaseScore}
          />
        ) : (
          <QuizContainer>
            <Title>
              Question {currentQuestion + 1} of {Question.length}
            </Title>
            <Para>
              Category:{" "}
              {Question[currentQuestion].category.replace(/%20|%26|%3A/g, " ")}
            </Para>

            <div className="Question">
              <p>
                {Question[currentQuestion].question.replace(
                  /%20|%22|%27|%3F|%2C/g,
                  " "
                )}
                ?
              </p>
            </div>

            <MultipleChoice
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              setIncreaseScore={setIncreaseScore}
              increaseScore={increaseScore}
              setFinalResult={setFinalResult}
              setDecreaseScore={setDecreaseScore}
              decreaseScore={decreaseScore}
            />

            <div className="score">
              <p>Score: {(increaseScore / Question.length) * 100}%</p>
              <p>Max Score: {(decreaseScore / Question.length) * 100}%</p>
            </div>

            <div>
              <Bar
                increaseScore={increaseScore}
                decreaseScore={decreaseScore}
              />
            </div>
          </QuizContainer>
        )}
      </Container>
    </>
  );
};

export default Quiz;
