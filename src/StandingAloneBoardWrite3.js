import { Link, NavLink, Route, Routes } from "react-router-dom";
import './StandingAloneBoardWrite3.css'



const StandingAloneBoardWrite3 = () => {
    return(
        <div>
            <div class = "write">
            <p id= "title">글의 제목 - 1</p>
            <hr/>
            <p id= "content">글의 내용</p>
            </div>
            
            <NavLink to="/StandingAloneBoard">
                <button id="writeok">글 목록보기</button>
            </NavLink>
            </div>
      )
      }
 
export default StandingAloneBoardWrite3;