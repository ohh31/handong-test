
import Background from "./components/background.js"
import {useLocation} from 'react-router';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { firestore } from '../firebase';
import firebase from 'firebase/app';


function Result() {
    let location = useLocation();
    const [finalResult, setfinalResult] = useState('');
    let ref = firestore.collection('Result');


    function increaseTotalCount(){
        ref.doc(`fF2LVDgqIHKIjKYbrU6s`).update({
            totalCount : firebase.firestore.FieldValue.increment(1)
          });
    }

    function saveResultType(result){
        var fieldName = `type.`+ result;
        console.log(fieldName);
        ref.doc(`fF2LVDgqIHKIjKYbrU6s`).update({
            [`${fieldName}`]: firebase.firestore.FieldValue.increment(1)
          });
    }

    useEffect(() => {
        const result = location.state.result;
        setfinalResult(result);
        saveResultType(result);
        increaseTotalCount();
      }, []);

    
    return <Background>
        <h3>{finalResult}</h3>      
    </Background>
}

export default Result;