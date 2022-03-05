import SessionCard from "./session-card";
import React from "react";
import {useNavigate} from "react-router-dom";

const JoinSessionCard = () => {
    const navigateSession = useNavigate()
    return (
        <>
            <div className="col">
                <div className="card4" onClick={()=>{navigateSession('/create_session')}}>
                    <div className="card-body">
                        <SessionCard/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default JoinSessionCard;