import React, { useState } from "react";

// components
import QuizHeader from "../QuizHeader/QuizHeader";
import QuizOptions from "../QuizOptions";
import TopProgressBar from "../TopProgressBar";
import BottomProgressBar from "../BottomProgressBar";

// json data
import { questions } from "../../Data/QuestionData";

// custom css
import "../../App.css";

// quizContainer css
import { Text, Button, ButtonContainer } from './QuizContainercss'

const QuizContainer = () => {
  // this state is used for question like 1,2,3...
  const [questionNumber, setQuestionNumber] = useState(0);

  // this state is used for next question to show the button
  const [nextQuestion, setNextQuestion] = useState(false);

  // this state is used for to show the correct or wrong text
  const [correctText, setCorrectText] = useState(false);
  const [noOfCorrectAnswer, setNoOfCorrectAnswer] = useState(0)
  const [correctAns, setCorrectAns] = useState(0);
  const [minimumScore, setMinimumScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(100);
  const [percentage, setPercentage] = useState(0);


  const handleClicked = (e) => {
    setNextQuestion(true);
    setCorrectAns(questionNumber + 1)
    if (e === questions[questionNumber].correct_answer) {
      setCorrectText(true);
      setMinimumScore((((noOfCorrectAnswer + 1) / questions.length) * 100));
      setPercentage((((noOfCorrectAnswer + 1) / (correctAns + 1)) * 100))
      setMaximumScore((((noOfCorrectAnswer + 1 + (questions.length - (correctAns + 1))) / questions.length) * 100))
      setNoOfCorrectAnswer(noOfCorrectAnswer + 1)
    } else {
      setCorrectText(false);
      let ansgive = correctAns + 1
      setMinimumScore((((noOfCorrectAnswer) / questions.length) * 100))
      setMaximumScore((((noOfCorrectAnswer + (questions.length - ansgive)) / questions.length) * 100))
      setPercentage((((noOfCorrectAnswer) / (correctAns + 1)) * 100))
    }
  };

  // changing the question using this function
  const nextQues = () => {
    setQuestionNumber(questionNumber + 1);
    setNextQuestion(false);
  };

  // show the result with help of this function
  const finalQuiz = () => {
    alert(percentage >= 60 ? "YOU WON 👍" : "YOU LOST 👎");
    window.location.reload();
  };

  return (
    <>
      <TopProgressBar questionNumber={questionNumber} totalQues={questions.length} />
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
          <BottomProgressBar minimumScore={minimumScore} maximumScore={maximumScore} percentage={percentage} />
        </div>
      </div>
    </>
  );
};

export default QuizContainer;