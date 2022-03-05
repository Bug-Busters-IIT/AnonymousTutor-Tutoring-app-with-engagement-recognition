import React from 'react';
import Page2Bg from "../second-page-component/image-component/2image-component";
import SecondCardComponent from "../second-page-component/card-component/second-card-component";
import ResetPassCard from "./card-component/reset-pass-card-component";
import ImageBg3 from "../third-page-component/image-component/3image-component";
import ThirdCardComponent from "../third-page-component/card-coomponent/third-card-component";

const ResetPasswordHome = () => {
    return (
        <>
            {/*Background image*/}
            <div className="image2">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <ImageBg3/>
                    <div>
                        <div className="row">
                            <ResetPassCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPasswordHome;
