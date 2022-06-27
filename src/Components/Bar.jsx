// import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

// import Question from "../Data";

// const Bar = ({ increaseScore, decreaseScore }) => {
//   return (
//     <>

//       <ProgressBar>
//         <ProgressBar
//           style={{ backgroundColor: "black" }}
//           now={(increaseScore / Question.length) * 100}
//           key={1}
//         />
//         <ProgressBar
//           style={{ backgroundColor: "#717171" }}
//           now={(increaseScore / Question.length) * 50}
//           key={2}
//         />
//         <ProgressBar
//           style={{ backgroundColor: "#adadad" }}
//           now={(decreaseScore / Question.length) * 100}
//           key={3}
//         />
//       </ProgressBar>
//     </>
//   );
// };

// export default Bar;

import React from "react";

// custom css
import "../App.css";

const Bar = ({ minimumScore, maximumScore }) => {
  return (
    <>
      <div className="score">
        <p>Score: {minimumScore}%</p>
        <p>Max Score: {maximumScore}%</p>
      </div>
      <div className="progressbar">
        <div
          className="filler"
          style={{
            background: `
                linear-gradient(
                    to right, 
                    #000 ${15}%, 
                    #717171 ${10}%, 
                    #717171 ${10}%,
                    #D2D2D2 ${25}%,
                    #D2D2D2 ${45}% ,
                    #FFFFFF 0)`,
          }}
        />
      </div>
    </>
  );
};

export default Bar;
