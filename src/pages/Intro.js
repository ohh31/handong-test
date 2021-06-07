import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Background from "./components/background.js"
import ContentBtn from "./components/buttons/content_btn.js"
import ContentBottom from "./components/img_bottom.js"
import { CSSTransition } from 'react-transition-group';

  function Intro() {

    return <Background>
       <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
      ><div>
    <div class = "content-title">
      <span>한동에서<br></br>나는 </span> 
      <span style = {{color: '#FFA200'}} class = "font yellow">어떤 유형</span>
      <span>일까 ?</span>
    </div>
    <ContentBtn value = "테스트 시작" path ="/desc"></ContentBtn></div>
    </CSSTransition> 
  <ContentBottom imgPath="/images/bg-image.png"></ContentBottom>
  </Background>
  }

  export default Intro;