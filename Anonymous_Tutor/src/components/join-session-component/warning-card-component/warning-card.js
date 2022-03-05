import React from 'react';
import WarningImage from "../warning-image/warning-img";
import "../warning-image/warning-img.css"
import CardContent from "../../comming-soon-page-component/card-content";
import WarningCardContent from "./warning-card-content";
import UserEngagementCard from "./user-engagement-card";
import "./warning-card.css"
import "../../../fonts/Play-Bold.ttf"
import "../../../fonts/Play-Regular.ttf"

const WarningCard = () => {
    return (
        <>
            <div className="row">
                <div className="col-8" style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                    <div className="card" style={{backgroundColor: "rgba(196, 196, 196, 1)"}}>
                        <div className="card-body">
                            {/*<h5 className="card-title">Special title treatment</h5>*/}
                            {/*<CardForm/>*/}
                            <WarningCardContent/>
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
                <div className="col-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="card w-75" style={{backgroundColor: "rgba(196, 196, 196, 1)"}}>
                        <div className="card-body">
                            {/*<h5 className="card-title">Special title treatment</h5>*/}
                            {/*<CardForm/>*/}
                            <UserEngagementCard/>
                            {/*<p className="card-text">*/}
                            {/*  With supporting text below as a natural lead-in to additional*/}
                            {/*  content.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default WarningCard;
