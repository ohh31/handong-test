import React, {useState, useEffect} from 'react';
import Background from "./components/background.js";

function Loading(){


return <div className = "content-container">
<div className = "loading-container" >
    <div className = "loading-item"></div>
    <div className = "loading-item"></div>
    <div className = "loading-item"></div>
</div>
<p>결과 분석 중</p></div>
}

export default Loading;
