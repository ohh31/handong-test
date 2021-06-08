import ContentBtn from "./buttons/content_btn";
import { CSSTransition } from 'react-transition-group';

function ContentDesc() {
    return <div class = "desc-text" style = {{ lineHeight : "140%", fontFamily: "Cafe24SsurroundAir", paddingBottom : '35px'}}>  
    <span style = {{color: '#FFA200'}} >
    MBTI에 진심인 한동고인물들
    </span>
    <span>이<br></br> 머리를 맞대고 만든 테스트입니다.<br></br>
    가벼운 마음으로 재밌게 즐겨주세요!<br></br><br></br></span>
    <span>NO 진지, NO 태클, NO 문의</span>
</div>
}

export default ContentDesc;
