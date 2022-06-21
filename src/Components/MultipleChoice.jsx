import React from "react";

import Question from "../Data";

import "../App.css";
import { useState } from "react";

import {
  Button,
  ButtonContainer,
  ChoiceWrapper,
  CorrectTitle,
  InCorrectTitle,
} from "./Styles/MultipleChoice";

const MultipleChoice = ({
  currentQuestion,
  setCurrentQuestion,
  setIncreaseScore,
  increaseScore,
  setDecreaseScore,
  decreaseScore,
}) => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const [correctText, setCorrectText] = useState(null);
  const [incorrectText, setIncorrectText] = useState(null);

  const handleClicked = (isCorrect) => {
    if (isCorrect) {
      setIncreaseScore(increaseScore + 1);
      setNextQuestion(true);
      setCorrectText(true);
    } else {
      setDecreaseScore(decreaseScore - 1);
      setNextQuestion(true);
      setIncorrectText(true);
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
      <ChoiceWrapper className="multiple_Choice">
        {Question[currentQuestion].options
          .sort(() => Math.random() - 0.5)
          .map((elem) => {
            return (
              <p
                disabled={nextQuestion ? true : false}
                onClick={() => handleClicked(elem.isCorrect)}
                key={elem.id}
              >
                {decodeURIComponent(elem.text)}
              </p>
            );
          })}
      </ChoiceWrapper>

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
              ? "Finish Check"
              : "Next Question"}
          </Button>
        )}
      </ButtonContainer>
    </>
  );
};

export default MultipleChoice;
