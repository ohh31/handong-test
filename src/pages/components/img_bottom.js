import React from 'react';
import { Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
        <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="move"
      >
        <div class = "content-bottom" style = {bottomStyle}>
        <img style = {imgStyle} src = {String(imgPath)}></img></div></CSSTransition>
    );
}

export default ImgBottom;