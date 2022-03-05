import Page2Bg from "../second-page-component/image-component/2image-component";
import SecondCardComponent from "../second-page-component/card-component/second-card-component";
import React from "react";
import RequestImageComponent from "./image-component/request-image-component";
import RequestCardComponent from "./card-component/request-card-component";
import JoinSessionCard from "./card-component/join-session-card";
import Progressbar from '../accept-request-component/progressbar-component/progress-bar';


const RequestHome = () => {
    return (
        <>
            {/*Background image*/}
            <div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                </div>
                <RequestImageComponent/>

                <div className="row g-0" style={{marginTop:"270px",marginLeft:"318px"}}>
                    <div className="col-6"><RequestCardComponent/></div>
                    <div className="col-6"> <JoinSessionCard/></div>
                </div>
                {/*<div style={{marginTop: "100px"}}>*/}
                {/*    <div className="row">*/}
                {/*        <RequestCardComponent/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div style={{marginLeft: "100px"}}>*/}
                {/*    <div className="row">*/}
                {/*        <JoinSessionCard/>*/}

                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </>
    );
};
export default RequestHome;