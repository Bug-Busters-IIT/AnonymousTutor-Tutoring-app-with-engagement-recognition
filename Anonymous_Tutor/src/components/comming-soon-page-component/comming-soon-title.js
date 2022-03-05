import React from 'react';
// import "../../fonts/Podkova-VariableFont_wght.ttf"
// import "./coming-soon-title.css"

const CommingSoonTitle = () => {
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
            <div className="row ms-3" style={{fontFamily: "Salsa",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "50px",
                lineHeight: "49px",
                color: "#FFFFFF",}}>
                <label> Coming soon with Anonymous Tutor 2.0</label>
            </div>
        </>
    );
};

export default CommingSoonTitle;
