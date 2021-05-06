import React from 'react';

import '../App.css';

class Intro extends React.Component {
    render() {
      return <div class = "app">
        <div class = "bg">
          <div class = "content-title">
            <span>한동에서<br></br>나는 </span> 
            <span style = {{color: '#FFA200'}} class = "font yellow">어떤 유형</span>
            <span>일까 ?</span>
          </div>
          
          <div class="content-btn">
         
            <span class="btn-text">테스트 시작</span>
          </div>
        
          <div class = "content-bottom">
        <img class = "bg-image" src = "/images/bg-image.png"  ></img></div>
        </div> 
      </div>
  }
  }
  
  export default Intro;
  