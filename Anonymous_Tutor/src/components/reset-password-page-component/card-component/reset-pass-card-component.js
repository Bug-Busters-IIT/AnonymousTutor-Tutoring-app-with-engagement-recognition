import React from 'react';
import SecondCardDetails from "../../second-page-component/card-component/second-card-details";
import SecondPageSubmitBtn from "../../second-page-component/button-component/second-page-submit-btn";
import ResetPassCardDetail from "./reset-pass-card-details";
import ResetPassBtn from "../button-component/reset-submit-btn";
import "./reset-pass-card-component.css";
import ThirdCardDetails from "../../third-page-component/card-coomponent/third-card-details";
import RequestButton from "../../third-page-component/button-component/request-button";

const ResetPassCard = () => {
    return (
        <>
            <div className="col">

                <div className="card3">
                    <div className="card-body">
                        <ResetPassCardDetail/>
                        {/* <div className="col" style={{ display:"flex",justifyContent:"center" }}>
                            <ResetPassBtn/>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default ResetPassCard;
