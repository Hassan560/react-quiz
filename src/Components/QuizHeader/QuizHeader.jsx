import React from "react";

// components
import Star from "../Star";

// quizheadercss 
import { Question, QuizPara, QuizTitle } from './Style/Index'

const QuizHeader = ({ question, questionNumber, totalQues }) => {
  // star funtionality
  let starLevel = 0;
  if (question.difficulty === "easy") {
    starLevel = 1;
  } else if (question.difficulty === "medium") {
    starLevel = 2;
  } else if (question.difficulty === "hard") {
    starLevel = 3;
  }

  return (
    <div className="QuizHeader">
      <QuizTitle>
        Question {questionNumber + 1} of {totalQues}
      </QuizTitle>
      <QuizPara>Category: {decodeURIComponent(question.category)} </QuizPara>
      <Star starLevel={starLevel} />
      <Question>{decodeURIComponent(question.question)}</Question>
    </div>
  );
};

export default QuizHeader;