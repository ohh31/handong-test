import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import "../App.css";
import Background from "./components/background.js";
import ContentDesc from "./components/content_desc";
import { CSSTransition } from "react-transition-group";

function Desc() {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (isVisible === false) {
      setTimeout(() => {
        history.push("/question");
      }, 300);
    }
  }, [isVisible]);

  return (
    <Background>
      <CSSTransition
        in={isVisible}
        appear={true}
        timeout={300}
        classNames="slide-in"
      >
        <div className="content-container">
          <ContentDesc />
          <button className="content-btn" onClick={() => setIsVisible(false)}>
            <span className="btn-text">진짜 시작</span>
          </button>
        </div>
      </CSSTransition>
    </Background>
  );
}

export default Desc;
