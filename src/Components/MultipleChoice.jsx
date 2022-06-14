import React from 'react'
import { useState } from 'react'

import Question from '../Data'

const MultipleChoice = ({ currentQuestion, setCurrentQuestion, setScore, score, setFinalResult }) => {

    const handleClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        if (currentQuestion + 1 < Question.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setFinalResult(true)
        }
    }

    return (
        <>
            <div className='multiple_Choice'>
                {/* <p onClick={handleClicked}>{Question[currentQuestion].correct_answer.replace(/%20|%2C/g, " ")}</p> */}
                {
                    Question[currentQuestion].options.map((elem) => {
                        return (
                            <p onClick={() => handleClicked(elem.isCorrect)} key={elem.id}>{elem.text.replace(/%20|%2C/g, " ")}</p>
                        )
                    })
                }
            </div >
        </>
    )
}

export default MultipleChoice