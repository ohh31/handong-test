import './App.css';
import style from "styled-components";
import React from 'react';
class App extends React.Component {
  render() {

    return <Background>
      
    </Background>
}
}

 const Background = style.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #302654;
  background-size: cover;
`;

export default App;
