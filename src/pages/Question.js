import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import SelectBtn from './components/buttons/select_btn.js';
import Background from "./components/background.js"

class Question extends React.Component {
    render() {
      return <Background>
      <div class = "question-text">
      지금 당장 떠난다면?
      </div>
      <SelectBtn value = "국내여행" path = "/question"></SelectBtn>
      <SelectBtn value = "해외여행" path = "/question"></SelectBtn>
      </Background>
    }
}

export default Question;