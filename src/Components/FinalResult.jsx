import React from 'react'

import '../App.css'

import Question from '../Data'

const FinalResult = ({ score, setScore, setFinalResult,setCurrentQuestion }) => {
    const endGame = () => {
        setScore(0)
        setCurrentQuestion(0)
        setFinalResult(false)
    }
    return (
        <div className='finalResult'>
            <h2>FinalResult</h2>
            <h3>{score} out of {Question.length}-correct ({(score / Question.length) * 100}%)</h3>
            <button onClick={() => endGame()} className="btn">Restart Game</button>
        </div>
    )
}

export default FinalResult