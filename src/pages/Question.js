import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import SelectBtn from './components/buttons/select_btn.js';
import Background from "./components/background.js"

function Question(){
  
  const [data, setData] = useState(0);

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
      <div class = "question-text">
{qstDataSet[data].question}
</div>
<SelectBtn value = {qstDataSet[data].ans1} onChange = {qstDataSet.length-1 === data ? toEnd : onChanges}></SelectBtn>
<SelectBtn value = {qstDataSet[data].ans2} onChange = {qstDataSet.length-1 === data ? toEnd : onChanges}></SelectBtn>
  </Background>
} 


export default Question;

