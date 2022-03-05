import React from "react";
import support_img from "../../../images/support.png";
import "../../../fonts/RammettoOne-Regular.ttf"
import './card.css'


const RequestCardDetails = () => {
    return (
        <>
            <div className='row'>
                <div className="col" >

                    <img src={support_img} style={{height: "225px",marginLeft:"15px"}} alt=""/>
                </div>

            </div>
            <div className="style">
                <label className={"style"}> Request Support</label>
            </div>
        </>
    );
};
export default RequestCardDetails;