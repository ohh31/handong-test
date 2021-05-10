import React from 'react';

function Background ({children}){
    const appStyle = {
    position: "absolute",
    background: "#302654",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent : "center",
    overflow: "hidden"
    }
    const bgStyle = {
        maxWidth: "379px",
        maxHeight: "667px",
        background: "#302654",
        paddingBottom:"0px",
        paddingTop: "160px",
        overflow: "hidden"
      }

    return (
        <div style ={appStyle}>
        <div style ={bgStyle}>
            {children}
            </div>
            </div>
    );
}

// Background.defaultProps = {
//     color : "#302654",
// }

export default Background;