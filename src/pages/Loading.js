import React, { useState, useEffect } from "react";
import Background from "./components/background.js";
import { CSSTransition } from "react-transition-group";

function Loading() {
  const [showQst, setShowQst] = useState(true);
  const style = {
    fontSize: "15px",
    fontWeight: "bold",
    paddingTop: "5px",
  };
  return (
    <CSSTransition in={showQst} timeout={300} classNames="slide-in">
      <div className="content-container">
        <div className="loading-container">
          <div className="loading-item"></div>
          <div className="loading-item"></div>
          <div className="loading-item"></div>
        </div>
        <p style={style}>결과 분석 중</p>
      </div>
    </CSSTransition>
  );
}

export default Loading;
