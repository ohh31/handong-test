
import Background from "./components/background.js"
import {useLocation} from 'react-router';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { firestore } from '../firebase';


function Result() {
    let location = useLocation();
    const [finalResult, setfinalResult] = useState('');

    useEffect(() => {
        const result = location.state.result;
        setfinalResult(result);
        
      }, []);

    function onCall(){
        let ref = firestore.collection('Result');
        ref.doc('fF2LVDgqIHKIjKYbrU6s').get().then(doc => {
            console.log(doc.data().totalCount);
        })
      };
    
    return <Background>
        <h3>{finalResult}</h3>
        <button onClick={onCall}>가져오기</button>
      
    </Background>
}

export default Result;