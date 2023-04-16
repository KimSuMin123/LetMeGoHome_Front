import StandingAloneHeader from "./StandingAloneHeader";
import StandingAloneFooter from "./StandingAloneFooter";
import './StandingAloneProject.css';
import 빈화면 from './img/빈화면.png'
import 메뉴2 from './img/메뉴2.png'
import 메뉴3 from './img/메뉴3.png'
import 메뉴4 from './img/메뉴4.png'

const StandingAloneProject = () => {
    return(
        <div>

<div className="Project">
                <p id="ProjectTitle">지원사업</p>
                <div className="Project">
                <div id="Search">
                    <input id="SearchText" type="text" placeholder="검색어를 입력하세요"/>
                    <button id="SearchSubmit" type="submit">검색</button>
                </div>
                </div>
                <div className="ProjectPreview">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={메뉴2}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={메뉴3}/>
                    </div>
                    <div id="ProjectPreview3">
                        <img id="ProjectPreviewImg" src={메뉴4}/>
                    </div>
                </div>
                <div className="ProjectPreview">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview3">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="ProjectPreview">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview3">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="ProjectPreviewLast">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview3">
                        <img id="ProjectPreviewImg" src={빈화면}/>
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
                <StandingAloneFooter />
            </div>
        </div>
    )
}
export default StandingAloneProject