import { CSSTransition } from 'react-transition-group';
import React, { useState, useEffect } from 'react';

function ProgressBar(props) {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted(props.index);
        console.log(completed);
    }, [completed]);

    const containerStyles = {
        height: 20,
        width: '50',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${100*((props.index+1)/5)}%`,
        backgroundColor: "yellow",
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

    return  <div>
        <div style={containerStyles}>
    <div style={fillerStyles}>
      <span style={labelStyles}></span>
    </div>
  </div>
      <p style={labelStyles}>{props.index+1}/5</p></div>
}

export default ProgressBar;
