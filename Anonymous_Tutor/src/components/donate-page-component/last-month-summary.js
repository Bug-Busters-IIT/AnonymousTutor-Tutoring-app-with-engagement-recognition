import React from 'react';
import "./last-month-summary.css"

const LastMonthSummary = () => {
    return (
        <>
            <div className="row" style={{color: "white", textAlign:"center", marginBottom:"15px" ,fontSize:"24px",fontFamily:"Roboto" }}>
                <label>Summary from Last Month</label>
            </div>
            <div className="row" style={{color: "white" ,fontSize:"20px",fontFamily:"Abel" }}>
                <label>Total amount received :</label>
            </div>
            <div className="row" style={{color: "white" ,fontSize:"20px",fontFamily:"Abel" }}>
                <label>Expenses :</label>
                <label>- Modes of expenses will be displayed here-</label>
            </div>
        </>
    );
};

export default LastMonthSummary;
