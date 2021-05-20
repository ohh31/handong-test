import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import SelectBtn from './components/buttons/select_btn.js';
import Background from "./components/background.js"
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

  const handleOnSubmit = (event) => {
    event.preventDefault();
        history.push({
      pathname:`/result/${data}`,
      state
    });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.id.split("-");
     const type = value[0];
     const ans = value[1];
     setState((prevState) => ({
      ...prevState,
      [type]: ans === "ans1" ? prevState[type] + 1 : prevState[type] - 1
         }));
    setData(prevNumber => prevNumber + 1);
  };

  return <Background>
   <CSSTransition
        in={showQst}
        appear = {true}
        timeout={300}
        classNames="fade"
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

