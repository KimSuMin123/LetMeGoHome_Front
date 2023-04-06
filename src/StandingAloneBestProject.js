import './StandingAloneBestProject.css'
import StandingAloneMeeting from "./StandingAloneMeeting";
import StandingAloneProject from "./StandingAloneProject";
import 메뉴2 from './img/메뉴2.png'
import 메뉴3 from './img/메뉴3.png'
import 메뉴4 from './img/메뉴4.png'
import 미야자키의병아리세계 from './img/미야자키의병아리세계.png'
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
                    </div>
                    <div id="BestProjectPreview2">
                        <img id="BestProjectPreviewImg" src={메뉴3}/>

                    </div>
                    <div id="BestProjectPreview2">
                        <img id="BestProjectPreviewImg" src={메뉴4}/>
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

                    </div>
                    <div id="BestMeetingPreview2">
                        <img id="BestMeetingPreviewImg" src={메뉴4}/>
                    </div>
                    <div id="BestMeetingPreview2">
                        <img id="BestMeetingPreviewImg" src={메뉴2}/>
                    </div>
                </div>
            </div>
            <div className="EventPreview">
                        <img id="EventPreviewimg" src={미야자키의병아리세계}/>

                </div>
            <Routes>
                <Route path="/StandingAloneMeeting" element={<StandingAloneMeeting/>} />
                <Route path="/StandingAloneProject" element={<StandingAloneProject/>} />
            </Routes>
        </div>
    )
}

export default StandingAloneBestProject