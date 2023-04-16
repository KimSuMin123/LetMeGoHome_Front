import { Link, NavLink, Route, Routes } from "react-router-dom";
import './StandingAloneBoardWrite2.css'
import StandingAloneBoardWrite from "./StandingAloneBoardWrite";

const StandingAloneBoardWrite2 = () => {
    return(
        <div class = "write">
            <input type='text' placeholder="제목을 입력해주세요."></input>
            <hr/>
            <input type="text" placeholder="내용을 입력해주세요." class="text"></input>
            <NavLink to="/StandingAloneBoard">
                <button id="writeokey">글 저장하기</button>
            </NavLink>
        </div>
        
    )
}
export default StandingAloneBoardWrite2;
