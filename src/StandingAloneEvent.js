import './StandingAloneEvent.css'
import StandingAloneFooter from "./StandingAloneFooter";
import 이벤트1   from './img/이벤트1.png'
import 이벤트2   from './img/이벤트2.png'
import 이벤트3   from './img/이벤트3.png'
import { Route, Routes } from "react-router-dom";
const StandingAloneEvent = () => {
    return(
        <div>
            <div className="Event">
    
                <div className="EventPreview">
                    <div id="EventPreview1">
                        <img id="EventPreviewImg" src={이벤트1}/>
                    </div>
                </div>
                <div className="EventPreview">
                    <div id="EventPreview1">
                        <img id="EventPreviewImg" src={이벤트2}/>
                    </div>
                </div>
                <div className="EventPreview">
                    <div id="EventPreview1">
                        <img id="EventPreviewImg" src={이벤트3}/>
                    </div>
                </div>
            </div>
            <StandingAloneFooter/>
        </div>

    )
}

export default StandingAloneEvent