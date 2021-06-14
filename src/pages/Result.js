
import Background from "./components/background.js";
import Loading from "./Loading";
import {useLocation, useHistory} from 'react-router';
import React, {useEffect, useState} from 'react';
import { firestore } from '../firebase';
import firebase from 'firebase/app';
import icon1 from '../styles/images/result-match-good.png';
import icon2 from '../styles/images/result-match-bad.png';
import resultData from '../resultData';


function Result() {
    const history = useHistory();
    const [isUpdated , setUpdated] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [finalResult, setfinalResult] = useState('');
    const [report, setReport]= useState({});
    let resultRef = firestore.collection('Result');
    let reportRef = firestore.collection('Report');
    const { title, subtitle, body, best, worst } = report;
    let location = useLocation();
    
    const resultDataSet = resultData;

    function changeNullToBr(value){
      return value.replaceAll("\\n", "\n" ).split("\n").map((line) => { 
        return (
          <span>
            {line}
            <br />
          </span>
        );
      });
    }

    async function getReportData(type){
     
      if(indow.sessionStorage.getItem("title")=== null){
        reportRef.doc(type).get().then((doc) => {
            if (doc.exists) {
              let currentTitle = changeNullToBr(doc.data().title);
              let currentSubtitle = changeNullToBr(doc.data().subtitle);
              let currentBody = changeNullToBr(doc.data().body);
              let currentBest =  doc.data().best;
              let currentWorst = doc.data().worst;
                setReport(
               {
                title : currentTitle,
                subtitle : currentSubtitle,
                body : currentBody,
                  best : currentBest,
                  worst : currentWorst,
               }
                );  
                window.sessionStorage.setItem("title", JSON.stringify(currentTitle));
                window.sessionStorage.setItem("subtitle", JSON.stringify(currentSubtitle));
                window.sessionStorage.setItem("body", JSON.stringify(currentBody));
                window.sessionStorage.setItem("best", JSON.stringify(currentBest));
                window.sessionStorage.setItem("worst", JSON.stringify(currentWorst));
            }
    });
  } else{
    setReport(
      {
       title : window.sessionStorage.getItem("title"),
       subtitle : window.sessionStorage.getItem("title"),
       body : window.sessionStorage.getItem("body"),
         best : window.sessionStorage.getItem("best"),
         worst : window.sessionStorage.getItem("worst"),
      }
       );  
  }
}

     async function saveResultType(props){

        var fieldName = `type.`+ props;
        await resultRef.doc(`fF2LVDgqIHKIjKYbrU6s`).update({
            totalCount : firebase.firestore.FieldValue.increment(1),
            [`${fieldName}`]: firebase.firestore.FieldValue.increment(1)
          });
          setUpdated(true);
        }

    useEffect(() => {
        let result = location.state.result;
        if(result!== null){
        setfinalResult(result);
        if(window.sessionStorage.getItem("result")=== null && isUpdated === false){
          window.sessionStorage.setItem("result", JSON.stringify(result));
          saveResultType(result);
        } else if(window.sessionStorage.getItem("result" && isUpdated === true) !== result){
          window.sessionStorage.setItem("result", JSON.stringify(result));
        } else{
          console.log("no update");
        }

        if(finalResult!==''){
            getReportData(finalResult);
        }
    } else{
        history.replace('/');
    }
      }, [finalResult]);

      useEffect(() => {
        setTimeout(() => {
        setChecked(true);
        },800);
      // console.log("report");
      }, [report]);
      
     const fontStyle ={
      color : "#FFA200"
     }

     const name = "@ Sewon & Jeonga"

    return <Background>
     {isChecked === false ? <Loading/> :
     <div className="result-main-container">
        <div className = "result-body-container">
        <p className ="result-subtitle-text">{subtitle}</p>    
        <p className="result-title-text" style ={fontStyle} >{title}</p>
        <span className = "result-desc-text">{body}  </span>
        </div>
        <div className = "result-bottom-container">
        <div className = "result-match-wrap">
        <img src = {icon1} width = "15px"></img>
        <span className = "result-match-title"  style = {fontStyle}>나와 평생 밥고할 &nbsp; &nbsp;</span>
        <span className = "result-match-body" >{best}</span>
        </div>
        <div className = "result-match-wrap">
        <img src = {icon2} width = "15px"></img>
        <span className = "result-match-title"  style = {fontStyle}>나와 평생 어사될 &nbsp; &nbsp;</span>
        <span className = "result-match-body" >{worst}</span>
        </div>
        </div>
        <button className="final-btn" onClick={()=>   setTimeout(() => {
          alert('정확한 집계를 위해 \n 6월 19일 공개할 예정입니다 :)');
      }, 300)} >
        <span className="final-btn-text">한동 전체 mbti 순위보기</span>
        </button>
        <span className="name-text">{name}</span>
        </div>}
    </Background>
}

export default Result;