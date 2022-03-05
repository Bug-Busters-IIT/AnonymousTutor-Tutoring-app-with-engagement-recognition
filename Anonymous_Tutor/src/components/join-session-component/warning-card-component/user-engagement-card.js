import React from 'react';
import "./warning-card.css";

const UserEngagementCard = () => {
    return (
        <>
            <div className="row" style={{fontFamily: "Play-Bold"}}>
                <div className="col-8">
                    <label>USER ENGAGEMENT :</label>
                </div>
                <div className="col-4" style={{color: "red"}}>
                    <label>POOR</label>
                </div>

            </div>
        </>
    );
};

export default UserEngagementCard;
