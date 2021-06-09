import React, {useState} from 'react';
import '../App.css';
import SelectBtn from './components/buttons/select_btn.js';
import Background from "./components/background.js"
import ProgressBar from "./components/progress_bar.js"
import { CSSTransition } from 'react-transition-group';
import {useHistory} from "react-router";

const qstDataSet = [
  {
      id : 1,
      type : "energy",
      question: "1번 질문입니다",
      ans1: "대답 1번 입니다",
      ans2: "대답 2번 입니다",
  },
  {
      id : 2,
      type : "info",
      question: "2번 질문입니다",
      ans1: "대답 1번 입니다",
      ans2: "대답 2번 입니다",
  },
  {
      id : 3,
      type : "decide",
      question: "3번 질문입니다",
      ans1: "대답 1번 입니다",
      ans2: "대답 2번 입니다",
  },
  {
      id : 4,
      type : "life",
      question: "4번 질문입니다",
      ans1: "대답 1번 입니다",
      ans2: "대답 2번 입니다",
  },
  {
      id : 5,
      type : "life",
      question: "5번 질문입니다",
      ans1: "대답 1번 입니다",
      ans2: "대답 2번 입니다",
  },
]

function Question(){
  
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
    for (step = 0; step < 4; step++) {
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
              cvtType += 'p';
            } else{
              cvtType += 'j';
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
     timeout={500}
     classNames={showQst===true ? "slide-in" : "slide-out"}
    key = {data}
    ><div>
<div class = "question-text">
{qstDataSet[data].question}
</div>
<SelectBtn id = {qstDataSet[data].type + '-ans1'} value = {qstDataSet[data].ans1} onChange = {qstDataSet.length-1 === data ? handleOnSubmit : handleInputChange}></SelectBtn>
<SelectBtn id = {qstDataSet[data].type + '-ans2'} value = {qstDataSet[data].ans2} onChange = {qstDataSet.length-1 === data ? handleOnSubmit : handleInputChange}></SelectBtn>
</div>
</CSSTransition>
  </Background>

}
 

export default Question;

