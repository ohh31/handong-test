import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import ContentBtn from "./components/content_btn.js"
class Intro extends React.Component {
    render() {
      return <div class = "app">
        <div class = "bg">
          <div class = "content-title">
            <span>한동에서<br></br>나는 </span> 
            <span style = {{color: '#FFA200'}} class = "font yellow">어떤 유형</span>
            <span>일까 ?</span>
          </div>
          <ContentBtn value = "테스트 시작" path ="/question"></ContentBtn>
          <div class = "content-bottom">
        <img class = "bg-image" src = "/images/bg-image.png"  ></img></div>
        </div> 
      </div>
  }
  }
  
  export default Intro;