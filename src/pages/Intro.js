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

//  console.log("upload");
 
 useEffect(
  () => { 
    getTotalCount();
  },
);

  useEffect(
    () => { 
      if(isVisible === false){
        setTimeout(() => {
          history.push('/desc');
      }, 300);
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

const fontstyles = {
  textAlign : "center",
  lineHeight: "25px",
  fontSize : "13px",
}
  
const boxStyle = {
  textAlign : "center",
}

    return <Background>  
       <CSSTransition
     in={isVisible}
     appear = {true}
     timeout={500}
     classNames= "slide-in"
    unmountOnExit
    ><div className = "content-container">
    <ContentTitle/> 
    {totalCount === 0 ? 
        <p style = {fontstyles}>단시간 많은 접속량으로 인해 <br></br>서버가 일일 사용량 한도를 초과하였습니다.<br></br>태평양 표준시 자정에 맞춰 17시에 복구될 예정입니다. <br></br>많은 관심 감사드립니다! :)</p>
        :<div style = {boxStyle}>
     <button className="content-btn" onClick ={()=> setIsVisible(false)}>
          <span className = "btn-text" >테스트 시작</span>
        </button>
        <span className = "content-desc-text"><br></br>한동인 {totalCount}명이 테스트 하였습니다</span>
        </div>
        }
        </div>
       </CSSTransition>
    </Background>

  }

  export default Intro;