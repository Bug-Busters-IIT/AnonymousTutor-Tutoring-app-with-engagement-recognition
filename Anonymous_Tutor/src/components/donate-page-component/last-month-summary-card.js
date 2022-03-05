import React from 'react';
import DonateCardContent from "./donate-card-content";
import LastMonthSummary from "./last-month-summary";

const LastMonthSummaryCard = () => {
    return (
        <>
            <div className="col">
                <div className="card" style={{borderWidth:"3px",borderColor:"white"}}>
                    <div className="card-body">
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        <LastMonthSummary/>
                        {/*<p className="card-text">*/}
                        {/*  With supporting text below as a natural lead-in to additional*/}
                        {/*  content.*/}
                        {/*</p>*/}
                    </div>
                </div>
                {/*<div style={{ display:"flex",justifyContent:"end" }}>*/}
                {/*    <CardFormBtn/>*/}
                {/*</div>*/}

            </div>
        </>
    );
};

export default LastMonthSummaryCard;
