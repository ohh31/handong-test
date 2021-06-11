
import Background from "./components/background.js"
import {useLocation, useHistory} from 'react-router';
import React, {useEffect, useState} from 'react';
import { firestore } from '../firebase';
import firebase from 'firebase/app';


function Result() {
    const history = useHistory();
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
      console.log("report");
      }, [report]);

    return <Background>
     {title !== null? <div>
        <p className ="result-subtitle-text">{subtitle}</p>    
        <p className="result-title-text">{title}</p>
        <span className = "result-desc-title">{body}  </span>
        <span className = "result-desc-title">평생 밥고할 사이</span>
        <span className = "result-desc-title">{best}  </span>
        <span className = "result-desc-title">어짜피 어사될 사이</span>
        <span className = "result-desc-title">{worst}  </span></div>:<div>결과 분석 중</div>}
    </Background>
}

export default Result;