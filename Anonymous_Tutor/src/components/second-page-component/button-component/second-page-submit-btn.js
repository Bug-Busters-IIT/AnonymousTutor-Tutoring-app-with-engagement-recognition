import React from "react";
import {useNavigate} from "react-router-dom";
import SecondCardDetails from "../card-component/second-card-details";




const SecondPageSubmitBtn = () => {
    const navigate2 = useNavigate()
    return (
        <>
            <div className="row" style={{marginTop: "-100px",marginRight:"50px"}}>
                <div className="col-6">
                    <button className="submit" type="submit">SUBMIT</button>
                </div>
            </div>
        </>
    );
};

export default SecondPageSubmitBtn;