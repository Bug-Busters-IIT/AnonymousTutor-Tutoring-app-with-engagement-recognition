import SessionCardDetails from "./session-card-details";
import React from "react";
import SecondCardDetails from "../../second-page-component/card-component/second-card-details";
import SecondPageSubmitBtn from "../../second-page-component/button-component/second-page-submit-btn";

const SessionCardComponent = (data) =>
{
    
    console.log("y ", data);

    return (
        <>
            <div className="col">
                <div className="card2" style={{marginTop:"12px"}}>
                    <div className="card-body">
                        <SessionCardDetails data={data}/>
                    </div>
                </div>

            </div>
        </>
    );
};
export default SessionCardComponent;