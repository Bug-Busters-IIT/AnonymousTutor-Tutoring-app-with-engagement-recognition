import Image from "../first-page-component/image-component";
import DonateTitle from "../donate-page-component/donate-title/donate-title";
import DonateCard from "../donate-page-component/donate-card";
import React from "react";
import WarningCard from "./warning-card-component/warning-card";
import UserProfileCard from "./user-profile-card-component/user-profile-card";
import BottomCard from "./bottom-card-component/bottom-card";

const JoinSessionComponent = () => {
    return (
        <>

            <div style={{
                width: "100%",
                height: "745px",
                background: "rgba(0, 0, 0, 0.5)"
            }}>
                <Image/>

                <div>
                    <div className="row g-0">
                        <WarningCard/>
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
                <div className="row g-0" style={{marginTop: "10px"}}>
                    <UserProfileCard/>
                </div>
                <div className="row g-0 mt-3" style={{display: "flex", justifyContent: "end", alignItems: "end"}}>
                    <BottomCard/>
                </div>

            </div>
            {/*<div className={"wrapper"}>*/}
            {/*    <CardFormBtn/>*/}
            {/*</div>*/}

        </>
    );
};
export default JoinSessionComponent;