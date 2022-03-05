import React from 'react';
import CardForm from "../first-page-component/card-component/card-form-component";
import CardContent from "./card-content";

const ComingSoonCard = () => {
    return (
        <>
            <div className="col" style={{display:"flex",justifyContent:"center", alignItems: "center"}}>
                <div className="card">
                    <div className="card-body">
                        {/*<h5 className="card-title">Special title treatment</h5>*/}
                        {/*<CardForm/>*/}
                        <CardContent/>
                        {/*<p className="card-text">*/}
                        {/*  With supporting text below as a natural lead-in to additional*/}
                        {/*  content.*/}
                        {/*</p>*/}
                    </div>
                </div>
                {/*<div style={{ display:"flex",justifyContent:"end" }}>*/}
                {/*    <CardFormBtn/>*/}
                {/*</div>*/}

            </div>
        </>
    );
};

export default ComingSoonCard;
