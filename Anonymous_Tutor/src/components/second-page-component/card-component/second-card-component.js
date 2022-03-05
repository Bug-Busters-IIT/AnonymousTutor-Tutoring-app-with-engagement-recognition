import './second-card-component.css'
import SecondCardDetails from "./second-card-details";
import React from "react";
import SecondPageSubmitBtn from "../button-component/second-page-submit-btn";

function SecondCardComponent() {
    return (

        <>
            <div className="col">
                <div className="card2">
                    <div className="card-body">
                        <SecondCardDetails/>
                    </div>
                </div>
                {/* <div style={{display: "flex", justifyContent: "end"}}>
                    <SecondPageSubmitBtn/>
                </div> */}
            </div>
        </>
    );
}

export default SecondCardComponent;