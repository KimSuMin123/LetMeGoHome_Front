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
                        <img id="MeetingPreviewImg1" src={밥}/>
               
                        </div>
                    </div>
                <div>
            <div className="Meeting">
                <p id="MeetingTitle">전체</p>
                    <div className="MeetingPreview">
                    </div>
                    <div id="Search">
                    <input id="SearchText" type="text" placeholder="검색어를 입력하세요"/>
                    <button id="SearchSubmit" type="submit">검색</button>
                </div>
                </div>
            </div>
                <div className="MeetingPreview">
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={동아리}/>    
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={산타}/>
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={음악}/>
                    </div>
                    </div>
                <div className="MeetingPreview">
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>    
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="MeetingPreview">
                    <div id="MeetingPreview2">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                    <div id="MeetingPreview3">
                        <img id="MeetingPreviewImg" src={빈화면}/>
                    </div>
                </div>
            </div>
            <div id = "pagebar">
                <li id ="page1">&lt;</li>
                <li id ="page">1</li>
                <li id ="page">2</li>
                <li id ="page">3</li>
                <li id ="page">4</li>
                <li id ="page">5</li>
                <li id ="page">6</li>
                <li id ="page">7</li>
                
                <li id ="page">&gt;</li>
               </div>
            <StandingAloneFooter/>
        </div>

    )
}

export default StandingAloneMeeting