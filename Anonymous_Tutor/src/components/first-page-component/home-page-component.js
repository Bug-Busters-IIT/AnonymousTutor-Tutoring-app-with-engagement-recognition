import React from 'react';
import './home-page.css';
import CardComponent from './card-component/card-component';
import Image from './image-component';
import Title from './title-component/title-component';
import './image.css';
import CardFormBtn from "./card-component/card-form-btn-component/card-form-btn-component";


const HomePageComponent = () => {
    return (
        <>
            <div>
                <Image/>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="row" style={{marginTop: "93px"}}>
                        <Title/>
                    </div>
                </div>

                <div className="row g-0" style={{marginTop: "50px"}}>
                    <CardComponent/>
                </div>
                <div className="row g-0" style={{ height: "187px"}}>
                    <div style={{display: "flex", justifyContent: "end", alignItems: "end"}}>
                        <CardFormBtn/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageComponent;
