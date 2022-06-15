import React from 'react'

import '../App.css'

import Question from '../Data'

const FinalResult = ({ increaseScore, setIncreaseScore, setFinalResult,setCurrentQuestion }) => {
    const endGame = () => {
        setIncreaseScore(0)
        setCurrentQuestion(0)
        setFinalResult(false)
    }
    return (
        <div className='finalResult'>
            <h2>FinalResult</h2>
            <h3>{increaseScore} out of {Question.length}-correct ({(increaseScore / Question.length) * 100}%)</h3>
            <button onClick={() => endGame()} className="btn">Restart Game</button>
        </div>
    )
}

export default FinalResult