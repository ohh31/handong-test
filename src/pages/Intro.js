import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import Background from "./components/background.js"
import ContentTitle from "./components/content_title"
import { firestore } from '../firebase';
import '../styles/font.css'

function Intro() {

  const [isVisible, setIsVisible] = useState(true);
  const [totalCount, setTotalCount]=useState(0);
  const history = useHistory();
  let ref = firestore.collection('Result');

 console.log("upload");
 
 useEffect(
  () => { 
    getTotalCount();
  },
);

  useEffect(
    () => { 
      if(isVisible === false){}
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
    unmountOnExit
    ><div className = "content-container">
    <ContentTitle/>
        <button className="content-btn" onClick ={closeComponent}>
          <span className = "btn-text" >테스트 시작</span>
        </button>
        <span className = "content-desc-text">한동인 {totalCount}명이 테스트 하였습니다</span>
        </div>
       </CSSTransition>
    </Background>

  }

  export default Intro;