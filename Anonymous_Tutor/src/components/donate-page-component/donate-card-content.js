import React from 'react';
import DonateCardContentText from "./donate-card-content-text";
import BankDetailCard from "./bank-detail-card";
import LastMonthSummaryCard from "./last-month-summary-card";
import "./donate-card-content.css"

const DonateCardContent = () => {
    return (
        <div className="row">
            <div className="col-7" style={{marginTop:"40px"}}>
                <DonateCardContentText/>
            </div>
            <div className="col-5">
                <div className="row">
                    <BankDetailCard/>
                </div>
                <div className="row"  style={{marginTop:"60px"}}>
                    <LastMonthSummaryCard/>
                </div>
            </div>
        </div>
    );
};

export default DonateCardContent;
