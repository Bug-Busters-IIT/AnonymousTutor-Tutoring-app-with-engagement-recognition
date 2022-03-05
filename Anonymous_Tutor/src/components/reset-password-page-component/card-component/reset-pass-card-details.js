import React, { useEffect, useState } from "react";
import axios from 'axios';
import ResetPassBtn from "../button-component/reset-submit-btn";
import Swal from "sweetalert2";


const ResetPassCardDetail = () => {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    function sendData(e) {
      e.preventDefault();
  
      //Data object
      const newUser = {
        username,
        password,
        email
      };
  
      axios
        .put("http://localhost:8000/user/resetpass", newUser)
        .then(() => {

              Swal.fire({  
                icon: 'success',  
                title: 'Done!',  
                text: 'Password reset!',
              }).then(() => {
                  window.location = "/";
                });  
      
        })
        .catch((err) => {
            Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'Reset failed!',
              }).then(() => {
            });  
        });
    }

    return (
        <>
        <form onSubmit={sendData}>
            <div className='row'  style={{fontFamily:"Roboto" }}>

                <div className="flex-lg-column">

                    <div className="col-auto" style={{color: "rgba(72, 72, 72, 1)", fontSize: "36px",display: "flex",
                        justifyContent: "center"}}>
                        <label>RESET PASSWORD</label>
                    </div>

                    <div className="row">
                        <div className="col-auto" style={{marginLeft: "25px"}}>
                            <div className="col-6" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}>
                                <label> User Name :</label>
                            </div>
                            <div className="col-6 " style={{marginTop: "-30px", marginLeft: "270px"}}>
                                <input className="input" type="text"
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                  }}/>
                            </div>

                            <div className="col-6"
                                 style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                <label> Email :</label>
                            </div>

                            <div className="col-6 " style={{marginTop: "-30px", marginLeft: "270px"}}>
                                <input className="input" type="email"
                                 onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}/>
                            </div>
                            <div className="col-7"
                                 style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                <label> New Password:</label>
                            </div>

                            {/*<div className="col-6 " style={{marginTop: "20px", marginLeft: "180px"}}>*/}
                            {/*    <textarea className="textarea"/>*/}

                            {/*</div>*/}
                            <div className="col-6 " style={{marginTop: "-30px", marginLeft: "270px"}}>
                                <input className="input" type="text"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}/>
                            </div>

                            <div className="col-8"
                                 style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                <label> Confirm New Password :</label>
                            </div>

                            <div className="col-4" style={{marginTop: "-30px", marginLeft: "270px"}}>
                                <input className="input" type="text"/>
                            </div>
                            <div className="col" style={{ display:"flex",justifyContent:"center" }}>
                            <ResetPassBtn/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
};

export default ResetPassCardDetail;
