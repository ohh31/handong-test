import Background from "./components/background.js";
import Loading from "./Loading";
import { useLocation, useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import icon1 from "../styles/images/result-match-good.png";
import icon2 from "../styles/images/result-match-bad.png";

function Result() {
  const history = useHistory();
  const [isUpdated, setUpdated] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [finalResult, setfinalResult] = useState("");
  const [report, setReport] = useState({});
  let resultRef = firestore.collection("Result");
  let reportRef = firestore.collection("Report");
  const { title, subtitle, body, best, worst } = report;
  let location = useLocation();

  function changeNullToBr(value) {
    return value
      .replaceAll("\\n", "\n")
      .split("\n")
      .map((line) => {
        return (
          <span>
            {line}
            <br />
          </span>
        );
      });
  }

  async function getReportData(type) {
    if (window.sessionStorage.getItem("title") === null) {
      reportRef
        .doc(type)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const currentTitle = doc.data().title;
            const currentSubtitle = doc.data().subtitle;
            const currentBody = doc.data().body;
            const currentBest = doc.data().best;
            const currentWorst = doc.data().worst;
            setReport({
              title: changeNullToBr(currentTitle),
              subtitle: changeNullToBr(currentSubtitle),
              body: changeNullToBr(currentBody),
              best: currentBest,
              worst: currentWorst,
            });
            window.sessionStorage.setItem(
              "title",
              JSON.stringify(currentTitle.replaceAll("\\n", "\n"))
            );
            window.sessionStorage.setItem(
              "subtitle",
              JSON.stringify(currentSubtitle.replaceAll("\\n", "\n"))
            );
            window.sessionStorage.setItem("body", JSON.stringify(currentBody));
            window.sessionStorage.setItem("best", JSON.stringify(currentBest));
            window.sessionStorage.setItem(
              "worst",
              JSON.stringify(currentWorst)
            );
          }
        });
    } else {
      setReport({
        title: changeNullToBr(window.sessionStorage.getItem("title")),
        subtitle: changeNullToBr(window.sessionStorage.getItem("subtitle")),
        body: changeNullToBr(window.sessionStorage.getItem("body")),
        best: window.sessionStorage.getItem("best"),
        worst: window.sessionStorage.getItem("worst"),
      });
    }
  }

  async function saveResultType(props) {
    var fieldName = `type.` + props;
    await resultRef.doc(`fF2LVDgqIHKIjKYbrU6s`).update({
      totalCount: firebase.firestore.FieldValue.increment(1),
      [`${fieldName}`]: firebase.firestore.FieldValue.increment(1),
    });
    setUpdated(true);
  }

  useEffect(() => {
    let result = location.state.result;
    let resultTostring = '"' + result + '"';
    if (result !== null) {
      setfinalResult(result);
      if (
        window.sessionStorage.getItem("result") === null &&
        isUpdated === false
      ) {
        window.sessionStorage.setItem("result", JSON.stringify(result));
        saveResultType(result);
      } else if (
        window.sessionStorage.getItem("result") !== resultTostring &&
        isUpdated === false
      ) {
        window.sessionStorage.clear();
        window.sessionStorage.setItem("result", JSON.stringify(result));
      } else {
        console.log("no update");
      }

      if (finalResult !== "") {
        getReportData(finalResult);
      }
    } else {
      history.replace("/");
    }
  }, [finalResult]);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 800);
    // console.log("report");
  }, [report]);

  const fontStyle = {
    color: "#FFA200",
  };

  const name = "@ Sewon & Jeonga";

  return (
    <Background>
      {isChecked === false ? (
        <Loading />
      ) : (
        <div className="result-main-container">
          <div className="result-body-container">
            <p className="result-subtitle-text">{subtitle}</p>
            <p className="result-title-text" style={fontStyle}>
              {title}
            </p>
            <span className="result-desc-text">{body} </span>
          </div>
          <div className="result-bottom-container">
            <div className="result-match-wrap">
              <img src={icon1} width="15px"></img>
              <span className="result-match-title" style={fontStyle}>
                ?????? ?????? ????????? &nbsp; &nbsp;
              </span>
              <span className="result-match-body">{best}</span>
            </div>
            <div className="result-match-wrap">
              <img src={icon2} width="15px"></img>
              <span className="result-match-title" style={fontStyle}>
                ?????? ?????? ????????? &nbsp; &nbsp;
              </span>
              <span className="result-match-body">{worst}</span>
            </div>
          </div>
          <button
            className="final-btn"
            onClick={() =>
              setTimeout(() => {
                alert("????????? ????????? ?????? \n 6??? 19??? ????????? ??????????????? :)");
              }, 300)
            }
          >
            <span className="final-btn-text">?????? ?????? mbti ????????????</span>
          </button>
          <span className="name-text">{name}</span>
        </div>
      )}
    </Background>
  );
}

export default Result;
