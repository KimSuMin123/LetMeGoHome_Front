import './StandingAloneBestProject.css'
import StandingAloneMeeting from "./StandingAloneMeeting";
import StandingAloneProject from "./StandingAloneProject";
import 메뉴2 from './img/메뉴2.png'
import 메뉴3 from './img/메뉴3.png'
import 메뉴4 from './img/메뉴4.png'
import { Route, Routes } from "react-router-dom";

const StandingAloneBestProject = () => {
    return (
        <div>
            <div id="BestProject">
                <div className="BestProjectTitle">
                    <p id="BestProjectText1">모임</p>
                        <a href="/StandingAloneProject">
                            <p id="BestProjectText2">더보기 &nbsp; +</p>
                        </a>

                </div>
                <div className="BestProjectPreview">
                    <div id="BestProjectPreview1">
                        <img id="BestProjectPreviewImg" src={메뉴2}/>
                        <p id="BestProjectPreviewText">우리집 개냥이들 사진!!</p>
                    </div>
                    <div id="BestProjectPreview2">
                        <img id="BestProjectPreviewImg" src={메뉴3}/>
                        <p id="BestProjectPreviewText">간식 달라고 쳐다보는 고양이 눈빛!!</p>
                    </div>
                    <div id="BestProjectPreview2">
                        <img id="BestProjectPreviewImg" src={메뉴4}/>
                        <p id="BestProjectPreviewText">우리집 개냥이들 사진!!</p>
                    </div>
                </div>
            </div>
            <div className="BestMeeting">
                <div className="BestMeetingTitle">
                    <p id="BestMeetingText1">지원사업</p>
                    <a href="/StandingAloneMeeting">
                        <p id="BestMeetingText2">더보기 &nbsp; +</p>
                    </a>
                </div>
                <div className="BestMeetingPreview">
                    <div id="BestMeetingPreview1">
                        <img id="BestMeetingPreviewImg" src={메뉴3}/>
                        <p id="BestMeetingPreviewText">(미개봉)고양이 사료<br/>10000원</p>
                    </div>
                    <div id="BestMeetingPreview2">
                        <img id="BestMeetingPreviewImg" src={메뉴4}/>
                        <p id="BestMeetingPreviewText">(실사용 1회) 캣타워<br/>50000원</p>
                    </div>
                    <div id="BestMeetingPreview2">
                        <img id="BestMeetingPreviewImg" src={메뉴3}/>
                        <p id="BestMeetingPreviewText">(미개봉) 고양이 사료<br/>10000원</p>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/StandingAloneMeeting" element={<StandingAloneMeeting/>} />
                <Route path="/StandingAloneProject" element={<StandingAloneProject/>} />
            </Routes>
        </div>
    )
}

export default StandingAloneBestProject