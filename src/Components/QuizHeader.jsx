import React from "react";

// components
import Star from "./Star";

// style__Components
import styled from "styled-components";

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

const QuizTitle = styled.h2`
  font-weight: normal;
  margin: 10px 0 5px 0;
`;

const QuizPara = styled.p`
    color: gray;,
    font-size: 12px;,
    /* margin: 0px; */
`;

const Question = styled.h5`
  font-size: 18px;
  font-weight: normal;
`;
