import React from 'react';

function Background ({children}){
   
    return (
        <div className = "main-container">
        <div className = "main-container-inner">
            {children}
            </div>
            </div>
    );
}


export default Background;