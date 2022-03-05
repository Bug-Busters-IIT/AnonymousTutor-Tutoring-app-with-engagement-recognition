import React from 'react';
import ProfileImageCard from "./profile-image-card";
import profile from "../../../images/profile.png";

const Users = () => {
    return (
        <>
            <div className="col" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="card"
                     style={{backgroundColor: "rgba(196, 196, 196, 1)", width: "230px", height: "150px"}}>
                    <div className="card-body"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        {/*<ProfileImageCard/>*/}
                        <img src={profile} style={{width: "137px", height: "126px"}} alt=""/>
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

export default Users;
