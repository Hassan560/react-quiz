import React from "react";

// custom css
import "../App.css";

const BottomProgressBar = ({ minimumScore, maximumScore, percentage }) => {
  return (
    <>
      <div className="score">
        <p>Score: {parseFloat(percentage).toFixed(0)}%</p>
        <p>Max Score: {parseFloat(maximumScore).toFixed(0)}%</p>
      </div>
      <div className="progressbar">
        <div
          className="filler"
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
      </div>
    </>
  );
};

export default BottomProgressBar;
