import StandingAloneHeader from "./StandingAloneHeader";
import StandingAloneFooter from "./StandingAloneFooter";
import './StandingAloneProject.css';
import 빈화면 from './img/빈화면.png'


const StandingAloneProject = () => {
    return(
        <div>

<div className="Project">
                <p id="ProjectTitle">지원사업</p>
                <div className="ProjectPreview">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="ProjectPreviewRe">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="ProjectPreviewRe">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="ProjectPreviewRe">
                    <div id="ProjectPreview1">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                    <div id="ProjectPreview2">
                        <img id="ProjectPreviewImg" src={빈화면}/>
                    </div>
                </div>
                <div className="Project">
                <div id="Search">
                    <input id="SearchText" type="text" placeholder="검색어를 입력하세요"/>
                    <button id="SearchSubmit" type="submit">검색</button>
                </div>
                </div>
                <StandingAloneFooter />
            </div>
        </div>
    )
}
export default StandingAloneProject