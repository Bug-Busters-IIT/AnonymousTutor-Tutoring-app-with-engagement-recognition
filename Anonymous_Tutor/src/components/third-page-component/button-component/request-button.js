import React from "react";
import {useNavigate} from "react-router-dom";


const RequestButton = () => {
    const navigate2 = useNavigate()
    return (
        <>
            <div className="col" style={{marginTop: "35px", marginLeft:"500px",paddingRight:"20px"}}>
                <div className="row">
                    <button className="request-btn" onClick={()=>{navigate2('/request')}}>POST REQUEST</button>

                </div>
            </div>
        </>
    );
};
export default RequestButton;