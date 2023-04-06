import './StandingAloneMeeting.css'
import StandingAloneFooter from "./StandingAloneFooter";
import 빈화면 from './img/빈화면.png'
const StandingAloneMeeting = () => {
    return(
        <div>
            <div className="Meeting">
                <p id="MeetingTitle">모임</p>
                <div className="MeetingPreview">
                    <div id="MeetingPreview1">
                        <img id="MeetingPreviewImg1" src={빈화면}/>
               
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