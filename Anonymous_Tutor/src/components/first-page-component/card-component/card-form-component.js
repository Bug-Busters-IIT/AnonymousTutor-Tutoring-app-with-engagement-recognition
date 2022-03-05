import React, { useEffect, useState } from 'react';
import './card-form-component.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const CardForm = () => {
    const navigate = useNavigate()

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function sendData(e) {
        e.preventDefault();
    
        //Data object
        const newUser = {
          username,
          password,
        };
    
        //Login
        axios.post('http://localhost:8000/user/login', newUser)
        .then(function (response) {
            // alert(response.data.user.role);
            if (response.data.user.role == 'STUDENT') {
                window.location = "/request_support";
            } else if (response.data.user.role == 'TUTOR'){
                window.location = "/request";
            }
        })
        .catch(function(error) {
            Swal.fire({  
                icon: 'error',  
                title: 'Oops...',  
                text: 'User Name or Password Is Incorrect!',
              }).then(() => {
                //   window.location = "/";
                });  
            // window.location = "/"
        })
    }

    return (
        <>
         <form onSubmit={sendData}>
            <div className="row" style={{display:"flex",justifyContent:"center"}}>
                <div className="col-3">
                    <label style={{color: "white", fontSize: "24px"}}> User Name :</label>
                </div>
                <div className="col-6 ">
                    <input className="input" type="text"
                     onChange={(e) => {
                        setUserName(e.target.value);
                      }}/>
                </div>
            </div>
            <div className="row" style={{display:"flex",justifyContent:"center",marginTop: "30px"}}>
                <div className="col-3" style={{color: "white", fontSize: "24px"}}>
                    <label> Password       :</label>
                </div>
                <div className="col-6">
                    <input className="input" type="password"
                     onChange={(e) => {
                        setPassword(e.target.value);
                      }}/>
                </div>
            </div>
            <div className="row" style={{display:"flex",justifyContent:"center",marginTop: "24px"}}>
                <div className="col-3" style={{color: "#AFA1A1"}}>
                    <label style={{marginRight: "1px", fontSize: "18px"}}> Not a user yet ? </label>
                    {/*<button className="crete-btn" onClick={()=>{navigate('/second')}}>Creat Account</button>*/}
                </div>
                <div className="col-6">
                    {/*<button className="crete-btn">Creat Account</button>*/}
                    <button className="crete-btn" onClick={()=>{navigate('/second')}}>Creat Account</button>
                </div>

            </div>
            <div className="row mt-3"style={{display:"flex",justifyContent:"end"}}>
                <div className="col-9">
                    <button className="reset-btn" onClick={()=>{navigate('/reset_password')}}>Reset password</button>
                </div>
                <div className="col-3">
                    <button className="login-btn" type="submit">Log in</button>
                </div>
            </div>
        </form>
        </>
    );
};

export default CardForm;
