import { Link, NavLink, Route, Routes } from "react-router-dom";
import './StandingAloneHeader.css'
import 홀로서기3 from './img/홀로서기3.png'
import 경기도로고3 from './img/경기도로고3.png'
import 로그인3 from './img/로그인3.png'
import StandingAloneLogin from './StandingAloneLogin'
import StandingAloneMeeting from "./StandingAloneMeeting";
import Board from "./Board";
import StandingAloneProject from "./StandingAloneProject";
import StandingAloneHome from "./StandingAloneHome";
import StandingAloneCompany from "./StandingAloneCompany";
import StandingAloneEvent from "./StandingAloneEvent";
const StandingAloneHeader = () => {
    return(
        <div>
            <li>
                    <NavLink to="/StandingAloneHome">
                        <img className="LogoImg" src={홀로서기3}/>
                    </NavLink>
                </li>
                <li>
                        <img className="Logo" src={경기도로고3}/>
                    
                </li>
                <li>
                <NavLink to="/StandingAloneLogin">
                <img className="Login" src={로그인3}/>
                    </NavLink>
                </li>
            <ul>
                <li>
                    <NavLink to="/StandingAloneProject">
                        지원사업
                    </NavLink>
                </li>
                <li className = "two">
                    <NavLink to="/StandingAloneMeeting">
                        모임
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/StandingAloneEvent">
                        이벤트
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Board">
                        게시판
                    </NavLink>
                </li>
            </ul>
                <Routes>
                    <Route path="/StandingAloneLogin" element={<StandingAloneLogin/>} />
                    <Route path="/StandingAloneMeeting" element={<StandingAloneMeeting/>} />
                    <Route path="/StandingAloneProject" element={<StandingAloneProject/>} />
                    <Route path="/StandingAloneEvent" element={<StandingAloneEvent/>} />
                    <Route path="/" element={<StandingAloneHome/>} />
                    <Route path="/StandingAloneHome" element={<StandingAloneHome />} />
                    <Route path="/StandingAloneCompany" element={<StandingAloneCompany/>} />
                </Routes>
        </div>
    )
}
export default StandingAloneHeader