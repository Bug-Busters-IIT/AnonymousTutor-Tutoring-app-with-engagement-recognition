import "./second-card-component.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import SecondPageSubmitBtn from "../button-component/second-page-submit-btn";
import Swal from "sweetalert2";

const SecondCardDetails = () => {

  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [lesson, setLesson] = useState("");
  const [notes_for_tutor, setNote] = useState("");
  const [email, setEmail] = useState("");


  function sendData(e) {
    e.preventDefault();

    //Data object
    const newRequest = {
      grade,
      subject,
      lesson,
      notes_for_tutor,
      email
    };

    axios
      .post("http://localhost:8000/request/add_request", newRequest)
      .then(() => {
        Swal.fire({  
          icon: 'success',  
          title: 'Done!',  
          text: 'Request sent!',
        }).then(() => {
            window.location = "/";
          });  
      })
      .catch((err) => {
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Creating request failed!',
        }).then(() => {
            window.location = "/";
          });  
      });
  }

  return (
    <>
     <form onSubmit={sendData}>
      <div className="row" style={{ fontFamily: "Roboto" }}>
        <div className="flex-lg-column">
          <div className="col-6" style={{ color: "#7D7D7D", fontSize: "18px" }}>
            <label> Create Request</label>
          </div>
          </div>

          <div className="row">
            <div className="col-auto" style={{ marginLeft: "25px" }}>
              <div
                className="col-6"
                style={{ color: "black", fontWeight: "bold", fontSize: "24px" }}
              >
                <label> Grade :</label>
              </div>
              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "150px" }}
              >
                <input
                  className="input"
                  type="number"
                  required
                  onChange={(e) => {
                    setGrade(e.target.value);
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
                <label> Subject :</label>
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
                    setSubject(e.target.value);
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
                <label> Lesson :</label>
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
                    setLesson(e.target.value);
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
                <label> Your Email :</label>
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



              <div
                className="col-6"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingTop: "12px",
                }}
              >
                <label> Notes for Tutor :</label>
              </div>

              <br/>
              <div
                className="col-6 "
                style={{ marginTop: "-30px", marginLeft: "150px" }}
              >
                <textarea
                  className="input"
                  type="text"
                  rows="4" 
                  cols="50"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />

              </div>

            
          </div>
          <div style={{display: "flex", justifyContent: "end"}}>
                    <SecondPageSubmitBtn/>
                </div>

        </div> 

      </div>
      </form>
    </>
  );
};

export default SecondCardDetails;
