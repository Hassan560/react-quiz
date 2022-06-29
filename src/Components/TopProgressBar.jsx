import React from 'react'
// progress bar bootstrap
import { ProgressBar } from 'react-bootstrap'

const TopProgressBar = ({questionNumber,totalQues}) => {
    return (
        <ProgressBar
            className="progress"
            now={questionNumber + 1}
            key={1}
            max={totalQues}
        />
    )
}

export default TopProgressBar