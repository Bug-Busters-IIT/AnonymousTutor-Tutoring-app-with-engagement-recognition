import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import RequestDetails from "./request-details";
import SecondPageSubmitBtn from "../../second-page-component/button-component/second-page-submit-btn";
import AcceptRequestBtn from "../accept-request-btn";
import "../../../fonts/Roboto-Regular.ttf"

const RequestCardAcceptComponent = (data) => {

    console.log("Accept request " + data.data.notes_for_tutor);

    return (
        <>
            <div className="col">
                <div className="card2">
                    <div className="card-body">
                   
                        <RequestDetails reqdata={data.data}/>
           
                    </div>
                    <div style={{display: "flex", justifyContent: "end", marginLeft:"2em"}}>
                        <AcceptRequestBtn data={data.data}/>
                    </div>
                </div>

            </div>
        </>
    );
};
export default RequestCardAcceptComponent;