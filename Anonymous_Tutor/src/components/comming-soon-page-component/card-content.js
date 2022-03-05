import React from 'react';
import backgroundImage from "../../images/background.png";
import comingSoonImage from "../../images/coming_soon_image.png"
import "./card-content.css"
import CardContentText from "./card-content-text";

const CardContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <CardContentText/>
                </div>
                <div className="col-6">
                    <img src={comingSoonImage} className="coming-soon-image" alt=""/>
                </div>
            </div>
        </>
    );
};

export default CardContent;
