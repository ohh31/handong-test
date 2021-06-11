import React, {useState} from 'react';
import '../App.css';
import Background from "./components/background.js"
import ProgressBar from "./components/progress_bar.js"
import { CSSTransition } from 'react-transition-group';
import {useHistory} from "react-router";
import QstData from '../data';

function Question(){
  const qstDataSet = QstData;
  const [data, setData] = useState(0);
  const [showQst, setShowQst] = useState(true);
  const history = useHistory();
  const [state, setState] = useState({
    energy: 0,
    info: 0,
    decide : 0,
    life : 0,
  });

  async function handleOnSubmit(event){
    event.preventDefault(event);
    
    var result = await getFinalResult();
    history.push({
         pathname:`/result/${result}`,
         state : {result : result}
      });
  }

  function handleInputChange (event){
    event.preventDefault(event);
    const value = event.target.id.split("-");
     const type = value[0];
     const ans = value[1];
     setState((prevState) => ({
      ...prevState,
      [type]: ans === "ans1" ? prevState[type] + 1 : prevState[type] - 1
         }));
    setData(prevNumber => prevNumber + 1);
  };

  async function getFinalResult(){
    const typeResult = await cvtValueToType();
    return typeResult;
  }

  function cvtValueToType(){
    var cvtType = '';
    var step;
    for (step = 0; step < 12; step++) {
      switch (step) {
        case 0: //e
            if(state.energy > 0){
              cvtType += 'e';
            } else{
              cvtType += 'i';
            }
          break;
        case 1: //n
            if(state.info > 0){
              cvtType += 'n';
            } else{
              cvtType += 's';
            }
          break;
        case 2: //t
           if(state.decide > 0){
            cvtType +='t';
            } else{
              cvtType +='f';
            }
          break;
        case 3: //p
            if(state.life > 0){
              cvtType += 'j';
            } else{
              cvtType += 'p';
            }
          break;
        default:
          console.log(`no data`);
      }
    }
    console.log(cvtType);
    return cvtType;
  };
  
  
  return <Background>
    <ProgressBar index ={data}/>
 <CSSTransition
     in={showQst}
     appear = {true}
     timeout={300}
     classNames={showQst===true ? "slide-in" : "slide-out"}
    key = {data}
    ><div className = "content-container">
        <p class = "question-main-text">
        {qstDataSet[data].question.split('\n').map( line => {
                    return (<span>{line}<br/></span>)
                  })}
        </p>
        <button className="select-btn" id = {qstDataSet[data].type + '-ans1'} className = 'select-btn' 
        onClick =  {qstDataSet.length-1 === data ? handleOnSubmit : handleInputChange}>
          {qstDataSet[data].ans1.split("\n").map((line) => { 
                            return (
                              <span>
                                {line}
                                <br />
                              </span>
                            );
                          })}</button>
        <button id = {qstDataSet[data].type + '-ans2'} className = 'select-btn' 
        onClick =  {qstDataSet.length-1 === data ? handleOnSubmit : handleInputChange}>
          {qstDataSet[data].ans2.split("\n").map((line) => { 
                            return (
                              <span>
                                {line}
                                <br />
                              </span>
                            );
                          })}</button>
        </div>
</CSSTransition>
  </Background>

}
 

export default Question;

