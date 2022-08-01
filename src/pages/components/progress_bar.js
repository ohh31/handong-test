import React, { useState, useEffect } from "react";

function ProgressBar(props) {
  const [percent, setPercent] = useState(0);
  let term;

  function updateProgress(value) {
    setPercent(percent + term);
  }

  useEffect(() => {
    term = 100 / 12;
  });

  useEffect(() => {
    if (percent <= 100 - term) {
      updateProgress(percent);
    }
  }, [props.index]);

  const fillerStyles = {
    height: "100%",
    width: `${percent}%`,
    backgroundColor: "#FFA200",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "0.8s ease",
  };

  return (
    <div className="progress-container-wrapper">
      <div className="progress-container">
        <div style={fillerStyles}>
          <span className="progress-label-text"></span>
        </div>
      </div>
      <span className="progress-label-text">{props.index + 1}/12</span>
    </div>
  );
}

export default ProgressBar;
