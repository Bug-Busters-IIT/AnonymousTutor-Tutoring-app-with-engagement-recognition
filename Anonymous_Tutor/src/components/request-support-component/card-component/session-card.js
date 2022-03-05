import support_img from "../../../images/join.png";
import React from "react";
import './card.css'

const SessionCard = ()=>
{
    return(
        <>
            <div className='row'>
                <div className="flex-lg-column">

                    <img src={support_img} style={{height: "225px",marginLeft:"50px"}} alt=""/>
                </div>

            </div>
            <div className="style">
                <label className={"style"}> Join Session</label>
            </div>
        </>
    );
};
export default SessionCard;