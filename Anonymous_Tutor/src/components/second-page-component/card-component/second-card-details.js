import "./second-card-component.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import SecondPageSubmitBtn from "../button-component/second-page-submit-btn";
import Swal from "sweetalert2";

const SecondCardDetails = () => {


  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");




  function sendData(e) {

    e.preventDefault();

    if(password == confirmpassword){

    

    //Data object
    const newUser = {
      fname,
      lname,
      email,
      phone,
      gender,
      role,
      username,
      password,
    };

    axios
      .post("http://localhost:8000/user/signup", newUser)
      .then(() => {
        
        Swal.fire({  
          icon: 'success',  
          title: 'Done!',  
          text: 'Successfully Signed up',
        }).then(() => {
            window.location = "/";
          });  
      })
      .catch((err) => {
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Error Sign up!',
        }).then(() => {
          }); 
      });

    }
    else{
      alert("Password don't match");
    }
  }

  return (
    <>
     <form onSubmit={sendData}>
      <div className="row" style={{ fontFamily: "Roboto" }}>
        <div className="flex-lg-column">
          <div className="col-6" style={{ color: "#7D7D7D", fontSize: "18px" }}>
            <label> Create Account</label>
          </div>

          <div className="row">
            <div className="col-auto" style={{ marginLeft: "25px" }}>
              <div
                className="col-6"
                style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}
              >
                <label> First Name :</label>
              </div>
              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "150px" }}
              >
                <input
                  className="input"
                  type="text"
                  required
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
              </div>

              <div
                className="col-6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingTop: "12px",
                }}
              >
                <label> Email :</label>
              </div>

              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "150px" }}
              >
                <input
                  className="input"
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col" style={{ marginLeft: "100px" }}>
              <div className="col-auto">
                <div
                  className="col-6"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  <label> Last Name :</label>
                </div>
                <div
                  className="col-6 "
                  style={{ marginTop: "-30px", marginLeft: "150px" }}
                >
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>

                <div
                  className="col-6"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "24px",
                    paddingTop: "12px",
                  }}
                >
                  <label> Phone :</label>
                </div>

                <div
                  className="col-6 "
                  style={{ marginTop: "-30px", marginLeft: "150px" }}
                >
                  <input
                    className="input"
                    type="number"
                    min= "0"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div
                className="col-6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingTop: "12px",
                  marginLeft: "25px",
                }}
              >
                <label> Gender :</label>
              </div>

              <div
                className="col-auto"
                style={{ marginTop: "-30px", marginLeft: "170px" }}
              >
                <div style={{ color: "black", fontSize: "20px" }}>
                  <input
                    type="radio"
                    value="MALE"
                    name="gender"
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />{" "}
                  MALE
                  <input
                    type="radio"
                    value="FEMALE"
                    name="gender"
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />{" "}
                  FEMALE
                </div>
              </div>
            </div>

            <div className="col-6">
              <div
                className="col-6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingTop: "12px",
                  marginLeft: "65px",
                }}
              >
                <label> I'm a :</label>
              </div>
              <div
                className="col-auto"
                style={{ marginTop: "-30px", marginLeft: "210px" }}
              >
                <div style={{ color: "black", fontSize: "20px" }}>
                  <input
                    type="radio"
                    value="STUDENT"
                    name="role"
                    required
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />{" "}
                  STUDENT
                  <input
                    type="radio"
                    value="TUTOR"
                    name="role"
                    style={{ marginLeft: "5px" }}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />{" "}
                  TUTOR
                </div>
              </div>
            </div>
          </div>

          <div className="flex-lg-column" style={{ marginTop: "20px" }}>
            <div
              className="col-6"
              style={{ color: "#7D7D7D", fontSize: "18px" }}
            >
              <label> Login Details</label>
            </div>
            <div className="col-auto">
              <div
                className="col-6"
                style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}
              >
                <label> Username :</label>
              </div>
              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "250px" }}
              >
                <input
                  className="input"
                  type="text"
                  required
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>

              <div
                className="col-6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingTop: "12px",
                }}
              >
                <label> Password :</label>
              </div>

              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "250px" }}
              >
                <input
                  className="input"
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="col-auto">
                <div
                  className="col-6"
                  style={{
                    color: "black",
                    marginTop: "15px",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  <label> Confirm Password :</label>
                </div>
                <div
                  className="col-6 "
                  style={{ marginTop: "-30px", marginLeft: "250px" }}
                >
                  <input className="input" type="password" 
                   onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}/>
                </div>

                <div style={{display: "flex", justifyContent: "end"}}>
                    <SecondPageSubmitBtn/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default SecondCardDetails;
