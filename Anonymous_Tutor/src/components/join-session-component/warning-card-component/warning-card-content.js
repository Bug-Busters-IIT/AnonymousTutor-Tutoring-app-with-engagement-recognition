import React from 'react';
import Image from "../../first-page-component/image-component";
import WarningCard from "./warning-card";
import DonateCard from "../../donate-page-component/donate-card";
import WarningImage from "../warning-image/warning-img";
import "./warning-card.css"

const WarningCardContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-2 m-0">
                    <WarningImage/>
                </div>
                <div className="col-10 ps-4" style={{color: "black"}}>
                    <div className="row" style={{fontFamily: "Play-Bold", fontSize: "20px"}}>
                        <label>Dear User,</label>
                    </div>
                    <div className="row" style={{fontFamily: "Play-Regular"}}>
                        <p className="m-0">
                            We have detected poor engagement from your end in this
                            session.<br/> Please stay engaged as this may be your last
                            chance to enhance<br/> your subject knowledge<br/>
                        </p>
                    </div>
                </div>
            </div>


        </>
    );
};

export default WarningCardContent;
