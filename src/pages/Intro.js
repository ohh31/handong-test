import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from "react-router";
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import Background from "./components/background.js"
import ContentTitle from "./components/content_title"
import { firestore } from '../firebase';
import firebase from 'firebase/app';

function Intro() {

  const [isVisible, setIsVisible] = useState(true);
  const [totalCount, setTotalCount]=useState(0);
  const history = useHistory();
  let location = useLocation();
  let ref = firestore.collection('Result');

 console.log("upload");
 useEffect(
  () => { 
    getTotalCount();
  }, []
);

  useEffect(
    () => { 
      if(isVisible === false){
     console.log(location.pathname);
}
    }, [isVisible]
);

function getTotalCount(){
  ref.doc(`fF2LVDgqIHKIjKYbrU6s`).get().then((doc) => {
    if (doc.exists) {
      setTotalCount(doc.data().totalCount);
    } else {
        console.log("No such data");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
}

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

    const subTextStyle = {
      fontSize: "15px",
      color: "white",
      fontFamily: "Cafe24SsurroundAir",
      fontWeight: "bold"
  }

  async function closeComponent(event){
    event.preventDefault();
    setIsVisible(false);
    console.log(isVisible);
    setTimeout(() => {
      history.push('/desc');
  }, 300);
  }
    return <Background>  
       <CSSTransition
     in={isVisible}
     appear = {true}
     timeout={500}
     classNames={isVisible===true ? "slide-in" : "slide-out"}
    // key = {location.pathname}
    unmountOnExit
    ><div>
    <ContentTitle/>
        <button class="content-btn" style = {btnStyle} onClick ={closeComponent}>
          <span style = {btnText}>테스트 시작</span>
        </button>
        <span style = {subTextStyle}>한동인 {totalCount}명이 테스트 하였습니다</span>
        </div>
       </CSSTransition>
    </Background>
  }

  export default Intro;