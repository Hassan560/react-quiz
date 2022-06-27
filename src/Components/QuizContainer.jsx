import React, { useState } from "react";

// components
import QuizHeader from "./QuizHeader";
import QuizOptions from "./QuizOptions";
import styled from "styled-components";
import Bar from "./Bar";

// json data
import { questions } from "../Data/QuestionData";

// custom css
import "../App.css";

// progress bar
import ProgressBar from "react-bootstrap/esm/ProgressBar";

const QuizContainer = () => {
  // this state is used for question like 1,2,3...
  const [questionNumber, setQuestionNumber] = useState(0);

  // this state is used for next question to show the button
  const [nextQuestion, setNextQuestion] = useState(false);

  // this state is used for to show the correct or wrong text
  const [correctText, setCorrectText] = useState(false);
//   const [noOfCorrectAnswer, setNoOfCorrectAnswer] = useState(0)
  const [minimumScore, setMinimumScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(100);
//   const [percentage, setPercentage] = useState(0);

  const [correctAns] = useState(0);

  const handleClicked = (e) => {
    setNextQuestion(true);
    if (e === questions[questionNumber].correct_answer) {
      setCorrectText(true);
      setMinimumScore(((correctAns + 1) / questions.length) * 100);
      setMaximumScore(correctAns + 1 + questions.length);
    } else {
      setCorrectText(false);
    }
  };

  // changing the question using this function
  const nextQues = () => {
    setQuestionNumber(questionNumber + 1);
    setNextQuestion(false);
  };

  // show the result with help of this function
  const finalQuiz = () => {
    alert(60 ? "YOU WON 👍" : "YOU LOST 👎");
    window.location.reload();
  };

  return (
    <>
      <ProgressBar
        className="progress"
        now={questionNumber + 1}
        key={1}
        max={questions.length}
      />
      <div className="quizContainer">
        <QuizHeader
          question={questions[questionNumber]}
          totalQues={questions.length}
          questionNumber={questionNumber}
        />
        <QuizOptions
          question={questions[questionNumber]}
          handleClicked={handleClicked}
          nextQuestion={nextQuestion}
        />
        {nextQuestion && <Text> {correctText ? "correct" : "wrong"}</Text>}
        <ButtonContainer>
          {nextQuestion && (
            <Button
              onClick={
                questions.length - 1 === questionNumber ? finalQuiz : nextQues
              }
            >
              {questions.length - 1 === questionNumber
                ? "Finish Check Result"
                : "Next Question"}
            </Button>
          )}
        </ButtonContainer>
        <div className="progress__Container">
          <Bar minimumScore={minimumScore} maximumScore={maximumScore} />
        </div>
      </div>
    </>
  );
};

export default QuizContainer;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
`;
const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;
