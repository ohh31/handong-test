import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import SelectBtn from './components/buttons/select_btn.js';
import Background from "./components/background.js"
import { CSSTransition } from 'react-transition-group';

const duration = 300;


function Question({history}){
  
  const [data, setData] = useState(0);
  const [showQst, setShowQst] = useState(true);
  const qstDataSet = [
    {
        id : 1,
        question: "1번 질문입니다",
        ans1: "대답 1번 입니다",
        ans2: "대답 2번 입니다",
    },
    {
        id : 2,
        question: "2번 질문입니다",
        ans1: "대답 1번 입니다",
        ans2: "대답 2번 입니다",
    },
    {
        id : 3,
        question: "3번 질문입니다",
        ans1: "대답 1번 입니다",
        ans2: "대답 2번 입니다",
    },
    {
        id : 4,
        question: "4번 질문입니다",
        ans1: "대답 1번 입니다",
        ans2: "대답 2번 입니다",
    },
    {
        id : 5,
        question: "5번 질문입니다",
        ans1: "대답 1번 입니다",
        ans2: "대답 2번 입니다",
    },
]

  const onChanges = e => {
    setData(prevNumber => prevNumber + 1);
    console.log(data);
  }

  const toEnd = e => {
    console.log(data);
  }

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
<SelectBtn value = {qstDataSet[data].ans1} onChange = {qstDataSet.length-1 === data ? history.push('/result') : onChanges}></SelectBtn>
<SelectBtn value = {qstDataSet[data].ans2} onChange = {qstDataSet.length-1 === data ? history.push('/result') : onChanges}></SelectBtn>
</div>
</CSSTransition>
  </Background>
} 

{/* <Link to="/users">
          <button>Users</button>
        </Link> */}
export default Question;

