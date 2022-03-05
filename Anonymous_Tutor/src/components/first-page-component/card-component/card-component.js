import React from 'react';
import './card-component.css';
import CardForm from "./card-form-component";
import CardFormBtn from "./card-form-btn-component/card-form-btn-component";

function CardComponent() {
  return (
    <>
       {/*<div className="content">*/}
        <div className="col" style={{display:"flex",justifyContent:"center", alignItems: "center"}}>
            <div className="card" style={{width: "860px",
                height: "241px"}}>
                <div className="card-body">
                    {/*<h5 className="card-title">Special title treatment</h5>*/}
                    <CardForm/>
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

        {/*</div>*/}
      
      {/* <p>hhhkhkhk</p> */}
    </>
  );
}

export default CardComponent;
