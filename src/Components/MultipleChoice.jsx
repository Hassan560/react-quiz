import React from 'react'

import Question from '../Data'

import '../App.css'
import { useState } from 'react'

const MultipleChoice = ({ currentQuestion, setCurrentQuestion, setIncreaseScore, increaseScore, setFinalResult, setDecreaseScore, decreaseScore }) => {

    const [nextQuestion, setNextQuestion] = useState(false)
    const [correctText, setCorrectText] = useState(null)
    const [incorrectText, setIncorrectText] = useState(null)

    const handleClicked = (isCorrect) => {
        if (isCorrect) {
            setIncreaseScore(increaseScore + 1)
            setNextQuestion(true)
            setCorrectText(true)
        } else {
            setDecreaseScore(decreaseScore - 1)
            setNextQuestion(true)
            setIncorrectText(true)
        }
    }

    const nextQues = () => {
        if (currentQuestion + 1 < Question.length) {
            setCurrentQuestion(currentQuestion + 1)
            setNextQuestion(false)
            setCorrectText(false)
            setIncorrectText(false)
        } else {
            setFinalResult(true)
        }
    }

    return (
        <>
            <div className='multiple_Choice'>
                {
                    Question[currentQuestion].options.map((elem) => {
                        return (
                            <p disabled={nextQuestion ? true : false} onClick={() => handleClicked(elem.isCorrect)} key={elem.id}>{elem.text.replace(/%20|%2C/g, " ")}</p>
                        )
                    })
                }
            </div >
            <div className='correctText'>
                {
                    correctText ? 'Correct' : null
                }
            </div>
            <div className='inCorrectText'>
                {
                    incorrectText ? 'Sorry' : null
                }
            </div>
            <div className='multiple_choice_btn'>
                {
                    nextQuestion ? (
                        <button onClick={nextQues}>Next Question</button>
                    ) : null
                }
            </div>
        </>
    )
}

export default MultipleChoice