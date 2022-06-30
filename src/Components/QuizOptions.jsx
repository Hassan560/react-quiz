import React, { useState, useEffect } from "react";

// custom css
import "../App.css";

const QuizOptions = ({ question, handleClicked, showNextQuestion }) => {
  const [answerOption, setAnswerOption] = useState([]);

  useEffect(() => {
    const incorrectAnswers = question.incorrect_answers;
    const correctAnswer = question.correct_answer;
    const finalAnswer = incorrectAnswers.concat(correctAnswer);
    setAnswerOption(finalAnswer.sort(() => Math.random() - 0.5));
  }, [question]);

  return (
    <div className="quizOptions">
      {answerOption.map((elem) => (
        <p
          key={elem}
          disabled={showNextQuestion}
          onClick={() => handleClicked(elem)}
        >
          {decodeURIComponent(elem)}
        </p>
      ))}
    </div>
  );
};

export default QuizOptions;