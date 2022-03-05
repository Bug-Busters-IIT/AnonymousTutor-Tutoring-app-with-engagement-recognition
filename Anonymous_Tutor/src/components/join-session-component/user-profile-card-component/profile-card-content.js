import React from 'react';
import WarningCardContent from "../warning-card-component/warning-card-content";
import ProfileImageCard from "./profile-image-card";

const ProfileCardContent = () => {
    return (
        <>
            <div className="col" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="card"
                     style={{backgroundColor: "rgba(196, 196, 196, 1)", width: "402px", height: "376px"}}>
                    <div className="card-body"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        <ProfileImageCard/>
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

export default ProfileCardContent;
