import React from 'react'
import { useState } from 'react';

import '../App.css';

// data
import Question from '../Data'

import FinalResult from './FinalResult';
import MultipleChoice from './MultipleChoice';
import { LinearProgress } from '@material-ui/core';

const Quiz = () => {

    const [finalResult, setFinalResult] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <>
            {finalResult ? (
                <FinalResult setScore={setScore} score={score} setFinalResult={setFinalResult} setCurrentQuestion={setCurrentQuestion} />
            ) : (
                <div className='quizContainer'>
                    <h3>Question {currentQuestion + 1} of {Question.length}</h3>
                    <p>Category: {Question[currentQuestion].category.replace(/%20|%26|%3A/g, " ")}</p>
                    <div className='Question'>
                        <h3>{Question[currentQuestion].question.replace(/%20|%22|%27|%3F|%2C/g, " ")}?</h3>
                    </div>
                    <MultipleChoice currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setScore={setScore} score={score} setFinalResult={setFinalResult} />
                    <div className='score'>
                        <p>Score: {(score / Question.length) * 100}%</p>
                        <p>Max Score: 100%</p>
                    </div>
                    <LinearProgress variant="determinate" value={(score / Question.length) * 100} />
                </div>
            )}
        </>
    )
}

export default Quiz