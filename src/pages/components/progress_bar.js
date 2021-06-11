import React, { useState, useEffect } from 'react';

function ProgressBar(props) {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted(props.index);
        console.log(completed);
    }, [completed]);

      const fillerStyles = {
        height: '100%',
        width: `${100*((props.index+1)/12)}%`,
        backgroundColor: '#FFA200',
        borderRadius: 'inherit',
        textAlign: 'right'
      }
   
    return  <div className = "progress-container-wrapper">
        <div className = "progress-container">
    <div style={fillerStyles}>
      <span className = "progress-label-text" ></span>
    </div>
  </div>
      <span className = "progress-label-text">{props.index+1}/12</span></div>
}

export default ProgressBar;
