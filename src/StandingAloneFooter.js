import './StandingAloneFooter.css'
import StandingAloneCompany from "./StandingAloneCompany"
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
                    <li>
                        <a href="https://policy.naver.com/policy/privacy.html">개인정보처리방침 (네이버와 동일)</a>
                    </li>
                </ul>
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