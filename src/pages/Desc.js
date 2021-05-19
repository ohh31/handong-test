import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import Background from "./components/background.js"
import ContentBottom from "./components/img_bottom.js"
import ContentBtn from "./components/buttons/content_btn.js"

function Desc() {
  return <Background>
  <div class = "desc-text">  
      <span style = {{color: '#FFA200'}} >
        mbti 테스트에 진심인   <br></br></span>
        <span> 컴퓨터공학 학부생과 <br></br>
        상담심리 학부생이 만든 <br></br>
        mbti 테스트 입니다</span></div> 
        <ContentBtn value = "다음" path ="/question"></ContentBtn>
      <ContentBottom imgPath="/images/bg-image.png"></ContentBottom>
      </Background>
}

export default Desc;