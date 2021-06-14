
import Background from "./components/background.js";
import Loading from "./Loading";
import {useLocation, useHistory} from 'react-router';
import React, {useEffect, useState} from 'react';
import { firestore } from '../firebase';
import firebase from 'firebase/app';
import icon1 from '../styles/images/result-match-good.png';
import icon2 from '../styles/images/result-match-bad.png';

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
        reportRef.doc(type).get().then((doc) => {
            if (doc.exists) {
                setReport(
               {
                title : changeNullToBr(doc.data().title),
                subtitle : changeNullToBr(doc.data().subtitle),
                body : changeNullToBr(doc.data().body),
                  best : doc.data().best,
                  worst : doc.data().worst
               }
                );   
            }
    });}

     async function saveResultType(props){
      console.log(3);

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
          console.log(1);
        } else if(window.sessionStorage.getItem("result" && isUpdated === true) !== result){
          window.sessionStorage.setItem("result", JSON.stringify(result));
          console.log(2);

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