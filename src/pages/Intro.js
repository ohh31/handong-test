import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from "react-router";
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import Background from "./components/background.js"
import ContentTitle from "./components/content_title"

function Intro() {

  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();
  let location = useLocation();
  const doneRef = useRef(true);

  useEffect(() => {
    doneRef.current = isVisible;
    console.log(doneRef.current)
  }, [])

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
    setIsVisible(false);
    console.log(isVisible);

    setTimeout(() => {
        history.push('/desc');
        console.log(isVisible);
    }, 300);
  }
    return <Background>  
       <CSSTransition
     in={isVisible}
     appear = {true}
     timeout={300}
     classNames={isVisible===true ? "slide-in" : "slide-out"}
    key = {location.pathname}
    mountOnEnter = {true}
    unmountOnExit = {true}
    ><div>
    <ContentTitle/>
        <button class="content-btn" style = {btnStyle} onClick ={closeComponent}>
          <span style = {btnText}>테스트 시작</span>
        </button></div>
       </CSSTransition>
    </Background>
  }

  export default Intro;