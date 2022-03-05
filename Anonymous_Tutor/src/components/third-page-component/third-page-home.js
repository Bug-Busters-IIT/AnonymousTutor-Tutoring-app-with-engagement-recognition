import React from "react";
import ImageBg3 from "./image-component/3image-component";
import SecondCardComponent from "../second-page-component/card-component/second-card-component";
import ThirdCardComponent from "./card-coomponent/third-card-component";

const ThirdPageHome = () =>
{
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
                        <ThirdCardComponent/>
                    </div>
                </div>
            </div>
        </div>
    </>
);

}
export default ThirdPageHome;