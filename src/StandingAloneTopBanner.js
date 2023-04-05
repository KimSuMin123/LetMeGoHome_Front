import './StandingAloneTopBanner.css'
import 메인2 from './img/메인2.png'
import StandingAloneLogin from "./StandingAloneLogin";
import {Route, Routes} from "react-router-dom";
const StandingAloneTopBanner = () => {
  return(
      <div className="TopBanner">
          <div id="HeaderBanner">
              <img id="HeaderBannerImg" src={메인2}/>
          </div>
          <Routes>
              <Route path="/StandingAloneLogin" element={<StandingAloneLogin/>} />
          </Routes>
      </div>
  )
}

export default StandingAloneTopBanner