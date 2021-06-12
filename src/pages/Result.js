
import Background from "./components/background.js"
import {useLocation, useHistory} from 'react-router';
import React, {useEffect, useState} from 'react';
import { firestore } from '../firebase';
import firebase from 'firebase/app';
import icon1 from '../styles/images/result-match-good.png';
import icon2 from '../styles/images/result-match-bad.png';

function Result() {
    const history = useHistory();
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

    function saveResultType(result){
        var fieldName = `type.`+ result;
        resultRef.doc(`fF2LVDgqIHKIjKYbrU6s`).update({
            totalCount : firebase.firestore.FieldValue.increment(1),
            [`${fieldName}`]: firebase.firestore.FieldValue.increment(1)
          });

    }


    useEffect(() => {
        let result = location.state.result;
        if(result!= null){
        setfinalResult(result);
        saveResultType(result);
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
        },500);
      console.log("report");
      }, [report]);
      
     

    return <Background>
     {isChecked === false ?  <p>결과 분석 중</p> :
     <div className="result-main-container">
        <div className = "result-body-container">
        <p className ="result-subtitle-text">{subtitle}</p>    
        <p className="result-title-text">{title}</p>
        <span className = "result-desc-text">{body}  </span>
        </div>
        <div className = "result-bottom-container">
        <div className = "result-match-container">
        <div className = "result-match-wrap">
        <img src = {icon1} width = "15px"></img>
        <span className = "result-match-title">평생 밥고할 사이</span>
        </div>
        <p className = "result-match-body">{best}</p>
        </div>
        <div className = "divider"></div>
        <div className = "result-match-container">
        <div className = "result-match-wrap">
        <img src = {icon2} width = "15px"></img>
        <span className = "result-match-title">어짜피 어사될 사이</span>
        </div>
        <p className = "result-match-body">{worst}  </p>
        </div>
        </div>
        </div>}
    </Background>
}

export default Result;