import React from 'react';
import camera from "../../../images/camera.png";
import mic from "../../../images/mic.png";
import LeaveSessionBtn from "./leave-session-btn";
import "./bottom-card.css"
import "../../../fonts/Play-Bold.ttf"
import "../../../fonts/Play-Regular.ttf"

const BottomCardContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-1"></div>
                {/*<div className="col-2" style={{display: "flex", justifyContent: "end"}}><img src={camera} style={{*/}
                {/*    width: "50px",*/}
                {/*    height: "50px"*/}
                {/*}} alt=""/></div>*/}

                <div className="col-1">
                    <div className="row" style={{justifyContent: "end"}}>
                        <img src={camera} style={{width: "71px", height: "50px"}} alt=""/>

                    </div>

                    <div className="row" style={{marginLeft: "34px", fontFamily: "Play-Bold"}}><label>Camera</label>
                    </div>

                </div>


                <div className="col-2">
                    <div className="row"><img src={mic} style={{width: "71px", height: "50px"}} alt=""/></div>
                    <div className="row ms-0" style={{fontFamily: "Play-Bold"}}><label>Mic</label></div>
                </div>
                {/*<div className="col-5"></div>*/}
                <div className="col-8" style={{display: "flex", justifyContent: "end"}}><LeaveSessionBtn/></div>
            </div>
        </>
    );
};

export default BottomCardContent;
