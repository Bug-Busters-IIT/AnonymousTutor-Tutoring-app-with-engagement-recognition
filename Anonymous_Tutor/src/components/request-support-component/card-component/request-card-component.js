import React from "react";
import './request-card-component.css'
import RequestCardDetails from "./request-card-details";
import {useNavigate} from "react-router-dom";
const RequestCardComponent = () =>

{
    const navigateRequest = useNavigate()
    return (

        <>
            <div className="col">
                <div className="card4" onClick={()=>{navigateRequest('/create_request')}}>
                    <div className="card-body">
                        <RequestCardDetails/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RequestCardComponent;