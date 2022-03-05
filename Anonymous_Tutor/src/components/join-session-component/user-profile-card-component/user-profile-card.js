import React from 'react';
import WarningCardContent from "../warning-card-component/warning-card-content";
import UserEngagementCard from "../warning-card-component/user-engagement-card";
import ProfileCardContent from "./profile-card-content";
import "./user-profile-card.css"
import Users from "./users";
import profile from "../../../images/profile.png";

const UserProfileCard = () => {
    return (
        <>
            <div className="row">
                <div className="col-9" style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                    <div className="card" style={{
                        backgroundColor: "rgba(196, 196, 196, 1)", width: "820px",
                        height: "475px", opacity: "0.8"
                    }}>
                        <div className="card-body"
                             style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                            {/*<h5 className="card-title">Special title treatment</h5>*/}
                            {/*<CardForm/>*/}
                            <ProfileCardContent/>

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
                <div className="col-3">
                    <div className="pro">
                        <div className="card mb-4 me-3"
                             style={{backgroundColor: "rgba(196, 196, 196, 1)", opacity: "0.8"}}>
                            <div className="card-body">
                                {/*<h5 className="card-title">Special title treatment</h5>*/}
                                {/*<CardForm/>*/}
                                <Users/>
                                {/*<p className="card-text">*/}
                                {/*  With supporting text below as a natural lead-in to additional*/}
                                {/*  content.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="card mb-4 me-3"
                             style={{backgroundColor: "rgba(196, 196, 196, 1)", opacity: "0.8"}}>
                            <div className="card-body">
                                {/*<h5 className="card-title">Special title treatment</h5>*/}
                                {/*<CardForm/>*/}
                                <Users/>
                                {/*<p className="card-text">*/}
                                {/*  With supporting text below as a natural lead-in to additional*/}
                                {/*  content.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="card mb-4 me-3"
                             style={{backgroundColor: "rgba(196, 196, 196, 1)", opacity: "0.8"}}>
                            <div className="card-body">
                                {/*<h5 className="card-title">Special title treatment</h5>*/}
                                {/*<CardForm/>*/}
                                <Users/>
                                {/*<p className="card-text">*/}
                                {/*  With supporting text below as a natural lead-in to additional*/}
                                {/*  content.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="card mb-4 me-3"
                             style={{backgroundColor: "rgba(196, 196, 196, 1)", opacity: "0.8"}}>
                            <div className="card-body">
                                {/*<h5 className="card-title">Special title treatment</h5>*/}
                                {/*<CardForm/>*/}
                                <Users/>
                                {/*<p className="card-text">*/}
                                {/*  With supporting text below as a natural lead-in to additional*/}
                                {/*  content.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        <div className="card mb-4 me-3"
                             style={{backgroundColor: "rgba(196, 196, 196, 1)", opacity: "0.8"}}>
                            <div className="card-body">
                                {/*<h5 className="card-title">Special title treatment</h5>*/}
                                {/*<CardForm/>*/}
                                <Users/>
                                {/*<p className="card-text">*/}
                                {/*  With supporting text below as a natural lead-in to additional*/}
                                {/*  content.*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserProfileCard;
