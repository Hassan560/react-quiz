import React from 'react'
import { useState } from 'react';

import '../App.css';

// data
import Question from '../Data'

import FinalResult from './FinalResult';
import MultipleChoice from './MultipleChoice';

import { Container, LinearProgress } from '@material-ui/core';
import Bar from './Bar';

const Quiz = () => {

    const [finalResult, setFinalResult] = useState(false)
    const [increaseScore, setIncreaseScore] = useState(0)
    const [decreaseScore, setDecreaseScore] = useState(20)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <>
            <div>
                <LinearProgress variant="determinate" value={currentQuestion + 5} style={{ backgroundColor: 'white' }} />
            </div>
            <Container>
                {finalResult ? (
                    <FinalResult
                        setIncreaseScore={setIncreaseScore}
                        increaseScore={increaseScore}
                        setFinalResult={setFinalResult}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                ) : (
                    <div className='quizContainer'>
                        <h2>Question {currentQuestion + 1} of {Question.length}</h2>
                        <p>Category: {Question[currentQuestion].category.replace(/%20|%26|%3A/g, " ")}</p>
                        <div className='Question'>
                            <p>{Question[currentQuestion].question.replace(/%20|%22|%27|%3F|%2C/g, " ")}?</p>
                        </div>
                        <MultipleChoice
                            currentQuestion={currentQuestion}
                            setCurrentQuestion={setCurrentQuestion}
                            setIncreaseScore={setIncreaseScore}
                            increaseScore={increaseScore}
                            setFinalResult={setFinalResult}
                            setDecreaseScore={setDecreaseScore}
                            decreaseScore={decreaseScore}
                        />
                        <div className='score'>
                            <p>Score: {(increaseScore / Question.length) * 100}%</p>
                            <p>Max Score: {(decreaseScore / Question.length) * 100}%</p>
                        </div>
                        <div>
                            <Bar
                                increaseScore={increaseScore}
                            />
                        </div>
                    </div>
                )}
            </Container>
        </>
    )
}

export default Quiz