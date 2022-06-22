import React from "react";
import Star from "./Star";
import { Para, Title } from "./Styles/Quiz";

const QuesHeader = ({ question, currentQuestion, questionLength }) => {
    
  let starLevel = 0;
  if (question.difficulty === "easy") {
    starLevel = 1;
  } else if (question.difficulty === "medium") {
    starLevel = 2;
  } else if (question.difficulty === "hard") {
    starLevel = 3;
  }

  return (
    <>
      <Title>
        Question {currentQuestion + 1} of {questionLength}
      </Title>
      <Para>Category:{decodeURIComponent(question.category)}</Para>
      <div>
        <Star starLevel={starLevel} />
      </div>
      <div className="Question">
        <p>{decodeURIComponent(question.question)}</p>
      </div>
    </>
  );
};

export default QuesHeader;
