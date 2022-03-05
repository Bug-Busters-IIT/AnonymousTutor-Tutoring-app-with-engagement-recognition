import React from 'react';
import "../donate-title.css"

const DonateTitle = () => {
    return (
        <>
            <div className="row" style={{
                fontFamily: "Podkova",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "34px",
                lineHeight: "27px",
                color: "#C2C2C2"}}>
                <label> HEY! THERE</label>

            </div>
            <div className="row ms-3" style={{
                fontFamily: "Sansation",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "50px",
                lineHeight: "49px",
                color: "#FFFFFF",}}>
                <label> Kindful DONOR....</label>
            </div>
        </>
    );
};

export default DonateTitle;
