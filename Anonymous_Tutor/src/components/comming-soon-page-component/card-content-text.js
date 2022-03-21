import React from 'react';
import "./card-content.css"
import "../../fonts/Salsa-Regular.ttf"

const CardContentText = () => {
    return (
        <>
            <div className="row" style={{
                color: "white", fontFamily: "Salsa",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "25px",
                lineHeight: "26px"
            }}>
                <label>Release Date : </label>
            </div>
            <div className="row ms-3 mt-2" style={{
                color: "white", fontFamily: "Salsa",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "25px",
                lineHeight: "26px"
            }}>
                <label> 24th of September 2022 </label>
            </div>
            <div className="row mt-3" style={{
                color: "white", fontFamily: "Salsa",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "25px",
                lineHeight: "26px"
            }}>
                <label>
                    New features :
                </label>
            </div>
            <div className="row ms-3 mt-2" style={{
                color: "white", fontFamily: "Salsa",
                fontStyle: "normal",
                fontWeight: "normal",
                width:"800px",
                fontSize: "25px",
                lineHeight: "normal",
            }}>
                <p>
                    Screen share facility <br/>
                    Built in white board <br/>
                    Optimized teaching platform within the web application <br/>
                    Ability to donate via online payment gateway <br/>
                    Mutlingual support <br/>
                    E-library facility <br/>
                    Optimized engagement detection system <br/>
                    Tutor notification system about students’ less engagement

                </p>
            </div>
        </>
    );
};

export default CardContentText;
