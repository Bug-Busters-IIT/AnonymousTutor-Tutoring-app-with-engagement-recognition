import React from 'react';
import CardContent from "../comming-soon-page-component/card-content";
import DonateCardContent from "./donate-card-content";

const DonateCard = () => {
    return (
        <>
            <div className="col" style={{display:"flex",justifyContent:"center", alignItems: "center"}}>
                <div className="card">
                    <div className="card-body">
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        <DonateCardContent/>
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
        </>
    );
};

export default DonateCard;
