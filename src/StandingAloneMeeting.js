import './StandingAloneMeeting.css'
import StandingAloneFooter from "./StandingAloneFooter";
import 빈화면 from './img/빈화면.png'
import 밥 from './img/밥.png'
import 동아리 from './img/동아리.png'
import 산타 from './img/산타.png'
import 음악 from './img/음악.png'
const StandingAloneMeeting = () => {
    return(
        <div>
            <div className="Meeting">
                <p id="MeetingTitle">모임</p>
                <div className="MeetingPreview">
                    <div id="MeetingPreview1">
                        <img id="MeetingPreviewImg1 " src={밥}/>
               
                        </div>
                    </div>
                <div>
            <div className="Meeting">
                <p id="MeetingTitle">전체</p>
                    <div className="MeetingPreview">
                    </div>
                </div>
            </div>
                <div className="MeetingPreviewRe">
                    <div id="MeetingPreview1">
                        <img id="MeetingPreviewImg" src={동아리}/>    
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={산타}/>
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={음악}/>
                    </div>
                    </div>
                <div className="MeetingPreviewRe">
                    <div id="MeetingPreview1">
                        <img id="MeetingPreviewImg" src={빈화면}/>    
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="MeetingPreviewRe">
                    <div id="MeetingPreview1">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                </div>
            </div>
            <StandingAloneFooter/>
        </div>

    )
}

export default StandingAloneMeeting