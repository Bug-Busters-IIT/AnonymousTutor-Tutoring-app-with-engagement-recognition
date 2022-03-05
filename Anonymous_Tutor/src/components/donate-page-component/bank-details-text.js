import React from 'react';
import "./bank-detail.css"

const BankDetail = () => {
    return (
        <>
            <div className="row" style={{color: "white" ,marginBottom:"15px" , fontSize: "24px" ,  fontFamily: "Sansation",}}>

                <label>Bank Details :</label>

            </div>
            <div className="row" style={{color: "white" ,fontSize:"20px", fontFamily:"Abel"}}>
                <div className="col-6">
                    <label>Beneficiary Name :</label>
                </div>
                <div className="col-6">
                    <label>Bug Busters @IIT</label>
                </div>
            </div>
            <div className="row"  style={{color: "white" ,fontSize:"20px",fontFamily:"Abel"}}>
                <div className="col-6">
                    <label>Bank Name :</label>
                </div>
                <div className="col-6">
                    <label>Sampath Bank</label>
                </div>
            </div>
            <div className="row"  style={{color: "white" ,fontSize:"20px",fontFamily:"Abel"}}>
                <div className="col-6"><label>Bank Branch :</label></div>
                <div className="col-6"><label>Wellawatta</label></div>
            </div>
            <div className="row"  style={{color: "white" ,fontSize:"20px",fontFamily:"Abel"}}>
                <div className="col-6"><label>Account no :</label></div>
                <div className="col-6"><label>007893423401</label></div>
            </div>
        </>
    );
};

export default BankDetail;
