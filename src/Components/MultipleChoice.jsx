import React from "react";

import "../App.css";
import { useState, useEffect } from "react";

import { ChoiceWrapper } from "./Styles/MultipleChoice";

const MultipleChoice = ({ correctText, handleClicked, question }) => {
  const [multipleAnswer, setMultipleAnswer] = useState([]);

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  useEffect(() => {
    question.incorrect_answers.push(question.correct_answer);
    let answer = shuffleArray(question.incorrect_answers);
    setMultipleAnswer(answer);
    console.log(answer);
  }, [question]);

  return (
    <>
      <ChoiceWrapper className="multiple_Choice">
        {multipleAnswer?.map((elem, index) => (
          <p
            key={index}
            disabled={correctText ? true : false}
            onClick={() => handleClicked(elem)}
          >
            {decodeURIComponent(elem)}
          </p>
        ))}
      </ChoiceWrapper>
    </>
  );
};

export default MultipleChoice;
