import BgComponent from "./image-component/bg-component";
import React, { useEffect, useState } from 'react';
import SessionCardComponent from "./card-component/session-card-component";
import {useLocation} from "react-router-dom";

const RequestSessionDetailsComponent = () =>
{
    const location = useLocation();
    // console.log("reqdata " + reqdata);


    // const { grade, subject, lesson, note } = location;
    console.log(location.state);

    return(
        <>
            <div className="image2">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <BgComponent/>
                    <div className="row">
                        <SessionCardComponent data={location.state}/>
                    </div>
                </div>

            </div>
        </>
    );
};
export default RequestSessionDetailsComponent;