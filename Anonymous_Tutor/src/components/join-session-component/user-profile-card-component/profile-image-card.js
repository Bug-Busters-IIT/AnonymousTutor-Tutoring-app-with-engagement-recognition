import React from 'react';
import WarningCardContent from "../warning-card-component/warning-card-content";
import profile from "../../../images/profile.png";
import "./profile-image.css"

const ProfileImageCard = () => {
    return (
        <>

            {/*<h5 className="card-title">Special title treatment</h5>*/}
            {/*<CardForm/>*/}
            {/*<WarningCardContent/>*/}
            <img src={profile} className={"profile"} alt=""/>
            {/*<p className="card-text">*/}
            {/*  With supporting text below as a natural lead-in to additional*/}
            {/*  content.*/}
            {/*</p>*/}


            {/*<div style={{ display:"flex",justifyContent:"end" }}>*/}
            {/*    <CardFormBtn/>*/}
            {/*</div>*/}


        </>
    );
};

export default ProfileImageCard;
