import React from "react";

// BottomProgressBar css
import {
  ScoreContainer,
  FillerProgressBar,
  ProgressBarContainer,
} from "./Style/Index";

const BottomProgressBar = ({ minimumScore, maximumScore, percentage }) => {
  return (
    <>
      <ScoreContainer>
        <p>Score: {parseFloat(percentage).toFixed(0)}%</p>
        <p>Max Score: {parseFloat(maximumScore).toFixed(0)}%</p>
      </ScoreContainer>

      <ProgressBarContainer>
        <FillerProgressBar
          style={{
            background: `
                linear-gradient(
                    to right, 
                    #000 ${minimumScore}%, 
                    #717171 ${minimumScore}%, 
                    #717171 ${percentage}%,
                    #D2D2D2 ${percentage}%,
                    #D2D2D2 ${maximumScore}% ,
                    #FFFFFF 0)`,
          }}
        />
      </ProgressBarContainer>
    </>
  );
};

export default BottomProgressBar;
