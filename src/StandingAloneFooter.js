import './StandingAloneFooter.css'
import StandingAloneCompany from "./StandingAloneCompany"
import 페이스북 from './img/페이스북.png'
import 유튜브 from './img/유튜브.png'
import 인스타그램 from './img/인스타그램.png'
import 트위터 from './img/트위터.png'
import { Route, Routes } from "react-router-dom";

const StandingAloneFooter = () => {
    return (
        <footer>
            <div id="bottomMenu">
                <ul>
                    <li>
                        <a href="/StandingAloneCompany">
                            <p>회사 소개</p>
                        </a>
                    </li>
                  
                </ul>
                <div id = "Icon">
                    <div id="IconPreview1">
                        <img id="IconPreviewImg" src={인스타그램}/>
                    </div>   
                    <div id="IconPreview1">
                        <img id="IconPreviewImg" src={트위터}/>
                    </div>          
                    <div id="IconPreview1">
                        <img id="IconPreviewImg" src={유튜브}/>
                    </div>
                    <div id="IconPreview1">
                        <img id="IconPreviewImg" src={페이스북}/>
                    </div>
                    </div>
            </div>
            <div id="company">
                <h3>contact</h3>
                <p> 제작진 : 최진용, 최지민, 이지오, 최서진, 권유현, 이호영<br />
                    주소 : 경기도 안양시 동안구 임곡로 29<br />
                    전화번호 : 031-467-4700<br/>
                </p>
            </div>
            <Routes>
                <Route path="StandingAloneCompany" element={<StandingAloneCompany/>} />
            </Routes>
        </footer>
    )
}

export default StandingAloneFooter