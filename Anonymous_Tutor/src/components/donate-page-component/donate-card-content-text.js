import React from 'react';
import "../../fonts/Abel-Regular.ttf"

const DonateCardContentText = () => {
    return (
        <>
            <div className="row ms-3 mt-2" style={{
                fontFamily:"Abel",
                color: "white",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "25px",
                lineHeight: "normal",
            }}>
                <p>
                    We, the developer team of Anonymous Tutor,<br/>
                    would like to extend our heartfelt gratitude in your<br/>
                    endeavours of lending  hand to uplift the student<br/>
                    knowlegde of the country.<br/>
                    Your valuable donations will be directed for the<br/>
                    motivational enhancement of our tutors who work<br/>
                    for charity.<br/>
                    It is expected to allocate 20% of the recieved <br/>
                    donations for the development of library facilities in<br/>
                    government schools with comparatively low <br/>
                    facilities.

                </p>
            </div>
        </>

    );
};

export default DonateCardContentText;
