import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import SelectBtn from './components/select_btn.js';
class Question extends React.Component {
    render() {
      return <div class = "app">
      <div class = "bg">  
      <div class = "question-text">
      지금 당장 떠난다면?
      </div>
      <SelectBtn value = "국내여행" path = "/question"></SelectBtn>
      <SelectBtn value = "해외여행" path = "/question"></SelectBtn>
      </div>
      </div>
    }
}

export default Question;