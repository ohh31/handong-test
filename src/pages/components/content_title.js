import ContentBtn from "./buttons/content_btn";
import { CSSTransition } from 'react-transition-group';

function ContentTitle() {
    
    return  <div class = "content-title" style = {{fontFamily: "Cafe24SsurroundAir"}}>
      <span>한동에서<br></br>나는 </span> 
      <span style = {{color: '#FFA200'}} class = "font yellow">어떤 유형</span>
      <span>일까 ?</span>
    </div>
}

export default ContentTitle;