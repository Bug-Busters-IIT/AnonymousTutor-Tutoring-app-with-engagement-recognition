import React from 'react';
import Page2Bg from "./image-component/2image-component";
import './image-component/2home-page.css'
import './image-component/imagebg2.css'
import SecondCardComponent from "./card-component/second-card-component";




const SecondPage = () => {
    return (
        <>
            <Page2Bg/>
            {/*Background image*/}
            <div className="image2">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    

                    <div>
                        <div className="row">
                            <SecondCardComponent/>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default SecondPage;
