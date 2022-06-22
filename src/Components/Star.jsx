import React from "react";

import "../App.css";

import StarRateIcon from "@mui/icons-material/StarRate";

const Star = ({ starLevel }) => {
  
  let blackStars = 0;
  if (starLevel === 1) {
    blackStars = 4;
  } else if (starLevel === 2) {
    blackStars = 3;
  } else if (starLevel === 3) {
    blackStars = 2;
  }

  return (
    <div>
      {Array(starLevel)
        .fill()
        .map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      {Array(blackStars)
        .fill()
        .map((_, index) => (
          <span key={index}>
            <StarRateIcon sx={{ fontSize: "14px" }} />
          </span>
        ))}
    </div>
  );
};

export default Star;
