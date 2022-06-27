import React, { useState, useEffect } from "react";

// custom css
import "../App.css";

const QuizOptions = ({ question, handleClicked, nextQuestion }) => {
  const [answerOption, setAnswerOption] = useState([]);

  useEffect(() => {
    const arr1 = question.incorrect_answers;
    const arr2 = question.correct_answer;
    const final = arr1.concat(arr2);
    setAnswerOption(final);
  }, [question]);

  return (
    <div className="quizOptions">
      {answerOption.map((elem) => (
        <p
          key={elem}
          disabled={nextQuestion}
          onClick={() => handleClicked(elem)}
        >
          {decodeURIComponent(elem)}
        </p>
      ))}
    </div>
  );
};

export default QuizOptions;
