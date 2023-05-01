import { Link, NavLink, Route, Routes } from "react-router-dom";
import './StandingAloneBoard.css'
import StandingAloneFooter from "./StandingAloneFooter";
import boardData from "../src/data/board.json";
const StandingAloneBoard1 = () => {
    return(
        <div>
            <p id="BoardTitle">게시판</p>
            <div id="Search">
                    <input id="SearchText" type="text" placeholder="검색어를 입력하세요"/>
                    <button id="SearchSubmit" type="submit">검색</button>
                </div>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            {boardData.title}
                        </NavLink>
                    </td>
                    <td>{boardData.username}</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 2
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 3
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 4
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 5
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 6
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 7
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        <NavLink to="/StandingAloneBoardWrite3">
                            글의 제목 - 8
                        </NavLink>
                    </td>
                    <td>작성자</td>
                    <td>2023.04.14</td>
                </tr>
                
            </table>
            <NavLink to="/StandingAloneBoardWrite2">
                <button id="write">글쓰기</button>
            </NavLink>
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

export default StandingAloneBoard1;