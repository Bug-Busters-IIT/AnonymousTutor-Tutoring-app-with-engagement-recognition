import React from 'react';
import Image from "../first-page-component/image-component";
import CommingSoonTitle from "./comming-soon-title";
import ComingSoonCard from "./comming-soon-card";

const CommingSoonHomePage = () => {
    return (
        <>
            <div>
                <Image/>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="row" style={{marginTop: "50px"}}>
                        <CommingSoonTitle/>
                    </div>

                </div>
                <div className="row g-0" style={{marginTop: "50px"}}>
                    <ComingSoonCard/>
                </div>

            </div>

        </>
    );
};

export default CommingSoonHomePage;
