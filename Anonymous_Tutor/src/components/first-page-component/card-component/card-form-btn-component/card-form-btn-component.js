import React from 'react';
import "./card-form-btn-component.css"
import {useNavigate} from "react-router-dom";

const CardFormBtn = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="row g-0" style={{marginTop: "54px"}}>
                <div className="col-6">
                    <button className="comming-soon-btn" style={{marginRight: "30px"}} onClick={()=>{navigate('/commingsoon')}}>Comming Soon</button>
                </div>
                <div className="col-6">
                    <button className="comming-soon-btn" onClick={()=>{navigate('/donate')}} >Donate</button>
                </div>
            </div>
        </>
    );
};

export default CardFormBtn;
