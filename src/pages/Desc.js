import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';

class Desc extends React.Component {
    render() {
      return <div class = "app">
      <div class = "bg">  
      <div class = "desc-text">  
          <span style = {{color: '#FFA200'}} >
            mbti 테스트에 진심인   <br></br></span>
            <span> 컴퓨터공학 학부생과 <br></br>
            상담심리 학부생이 만든 <br></br>
            mbti 테스트 입니다</span></div> 
      <div class = "content-bottom">
        <img class = "bg-image" src = "/images/bg-image.png"  ></img></div>
        </div>
    </div>
    }
}

export default Desc;