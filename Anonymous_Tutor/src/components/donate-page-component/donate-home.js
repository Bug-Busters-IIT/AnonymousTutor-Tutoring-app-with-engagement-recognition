import React from 'react';
import Image from "../first-page-component/image-component";
import CommingSoonTitle from "../comming-soon-page-component/comming-soon-title";
import ComingSoonCard from "../comming-soon-page-component/comming-soon-card";
import DonateTitle from "./donate-title/donate-title";
import "../../fonts/Sansation_Regular.ttf"
import DonateCard from "./donate-card";

const DonateHome = () => {
    return (
        <>
            <div >
                <Image/>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className="row" style={{marginTop:"50px"}} >
                        <DonateTitle/>
                    </div>
                    {/*<div className="row" >*/}
                    {/*    <CardComponent/>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div style={{display: "flex", justifyContent: "end", alignItems: "end"}}>*/}
                    {/*        <CardFormBtn/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
                <div className="row g-0" style={{marginTop:"50px"}} >
                    <DonateCard/>
                </div>

            </div>


            {/*<div className={"wrapper"}>*/}
            {/*    <CardFormBtn/>*/}
            {/*</div>*/}
        </>
    );
};

export default DonateHome;
