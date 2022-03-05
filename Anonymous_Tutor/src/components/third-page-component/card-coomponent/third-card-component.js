import React from "react";
import './third-card-component.css'
import ThirdCardDetails from "./third-card-details";
import RequestButton from "../button-component/request-button";

const ThirdCardComponent = () => {
    return (
        <>
            <div className="col">

                <div className="card3">
                    <div className="card-body">
                        <ThirdCardDetails/>
                        <div className="col" style={{ display:"flex",justifyContent:"end" }}>
                            <RequestButton/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default ThirdCardComponent;