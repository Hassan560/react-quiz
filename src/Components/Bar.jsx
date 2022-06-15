import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import Question from '../Data';

const Bar = ({ increaseScore }) => {
    return (
        <ProgressBar>
            <ProgressBar style={{ backgroundColor: 'black' }} now={(increaseScore / Question.length) * 100} key={1} />
            <ProgressBar style={{ backgroundColor: '#717171' }} now={(increaseScore / Question.length) * 50} key={2} />
        </ProgressBar>
    )
}

export default Bar