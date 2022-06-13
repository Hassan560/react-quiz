import React from 'react'

import '../App.css';

// data
import Data from '../Data';

const Quiz = () => {

    const nextQuestion = () => {
        alert('hello world')
    }

    return (
        <div className='quizContainer'>
            <h3>Question 1 of 20</h3>
            {
                Data.map((elem, index) => (
                    <p key={index}>{elem.category}</p>
                ))
            }
            <div>
                {
                    Data.map((elem)=> (
                        <h4>{elem.question}</h4>
                    ))
                }
            </div>
            <div className='answer'>
                {
                    Data.map((elem) => (

                        <p>{elem.question}</p>
                    )
                    )
                }
                <p>question 1</p>
                <p>question 1</p>
                <p>question 1</p>
                <p>question 1</p>
            </div>
            <div className='btn'>
                <button onClick={nextQuestion}>Next question</button>
            </div>
        </div>
    )
}

export default Quiz