import React from 'react';
import { Route, Link } from 'react-router-dom';

function ImgBottom ({imgPath}){
    const bottomStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        verticalAlign:"bottom"
    }
    const imgStyle = {
    // width : "700px",
    height :"450px",
    margin: "0px",
    backgroundSize: "cover"
      }

    return (
        <div class = "content-bottom" style = {bottomStyle}>
        <img style = {imgStyle} src = {String(imgPath)}></img></div>
    );
}

export default ImgBottom;