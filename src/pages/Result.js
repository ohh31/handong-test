
import Background from "./components/background.js"
import {useLocation} from "react-router";
import React, {useState} from 'react';
import axios from 'axios';



function Result() {
    let location = useLocation();
     const [resultData, setResultData] = useState({
        id: '',
        type: '',
        count: '',
    });

    function onCall(){
        axios.get('http://localhost:3001/api').then((Response)=>{
            console.log(Response.data);
            setResultData(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
      };
    
    return <Background>
        <h2>데이터가져오기</h2>
        <h3>data : {resultData.type}</h3>
        <button onClick={onCall}>가져오기</button>
      
    </Background>
}

export default Result;