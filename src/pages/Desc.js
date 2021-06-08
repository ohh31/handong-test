import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router";
import '../App.css';
import Background from "./components/background.js"
import ContentDesc from "./components/content_desc"
import { CSSTransition } from 'react-transition-group';

function Desc() {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();
  let location = useLocation();
  useEffect(() => {
    setIsVisible(false);
}, [isVisible]);
  const btnStyle = {
    borderRadius: "15px",
    backgroundColor: "transparent",
    width: "186px",
    height: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "24px",
    border : "solid white 2px",
}
  const btnText = {
    color : "white",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Cafe24SsurroundAir",
    alignSelf : "center"
  }  

  const linkStyle = {
    textDecoration: "none",
    color: "#383838",
}

async function closeComponent(event){
  event.preventDefault();
  await setIsVisible(false);
  setTimeout(() => {
      history.push('/question');
  }, 300);
}

  return <Background>
   <CSSTransition
     in={isVisible}
     appear = {true}
     timeout={300}
     classNames= "slide-in"
    key = {location.pathname}
    >
      {isVisible ?<div>
      <ContentDesc/>
        <button class="content-btn" style = {btnStyle} onClick={closeComponent}>
          <span style = {btnText}>진짜 시작</span>
        </button>
        </div> : <div></div> }</CSSTransition>
        </Background>
}

export default Desc;