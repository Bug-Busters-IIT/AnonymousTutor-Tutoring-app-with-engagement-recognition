import RequestButton from "../button-component/request-button";

const ThirdCardDetails = () => {
    return (
        <>
            <div className='row'  style={{fontFamily:"Roboto" }}>

                <div className="flex-lg-column">

                    <div className="col-auto" style={{color: "#7D7D7D", fontSize: "18px"}}>
                        <label>Request Support</label>
                    </div>

                    <div className="row">
                        <div className="col-auto" style={{marginLeft: "25px"}}>
                            <div className="col-6" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}>
                                <label> First Name :</label>
                            </div>
                            <div className="col-6 " style={{marginTop: "-30px", marginLeft: "180px"}}>
                                <input className="input" type="text"/>
                            </div>

                            <div className="col-6"
                                 style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                <label> Email :</label>
                            </div>

                            <div className="col-6 " style={{marginTop: "-30px", marginLeft: "180px"}}>
                                <input className="input" type="email"/>
                            </div>
                            <div className="col-7"
                                 style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                <label> Additional Notes for the tutor :</label>
                            </div>
                            <div className="col-5"
                                 style={{
                                     color: "black",
                                     fontWeight: "bold",
                                     fontSize: "24px",
                                     marginTop: "-15px",
                                     marginLeft: "240px"
                                 }}>
                            </div>
                            <div className="col-6 " style={{marginTop: "20px", marginLeft: "180px"}}>
                                <textarea className="textarea"/>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
export default ThirdCardDetails;