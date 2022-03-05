import React from 'react';
import ProfileCardContent from "../user-profile-card-component/profile-card-content";
import BottomCardContent from "./bottom-card-content";

const BottomCard = () => {
    return (
        <>
            <div className="col" style={{borderRadius: "none"}}>
                <div className="card opacity-75" style={{
                    backgroundColor: "rgba(196, 196, 196, 1)",
                }}>
                    <div className="card-body">
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        {/*<ProfileCardContent/>*/}
                        <BottomCardContent/>
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

export default BottomCard;
