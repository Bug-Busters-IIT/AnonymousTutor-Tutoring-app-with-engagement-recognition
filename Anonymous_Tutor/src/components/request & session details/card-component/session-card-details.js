import CreateSessionBtn from "../create-session-button/create session-btn";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

const SessionCardDetails = (data) => {


  const grade =  data.data.data.grade;
  const lesson = data.data.data.lesson;
  const subject = data.data.data.subject;
  const id = data.data.data.id;
  const note = data.data.data.note;

  const notes_for_students = data.data.data.note;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const email = data.data.data.email;

  console.log("my note " + note);



  function sendData(e) {
    e.preventDefault();

    //Data object
    const newSession = {
        id,
        grade,
        lesson,
        subject,
        notes_for_students,
        date,
        time,
        email
    };

    axios
      .post("http://localhost:8000/session/create_session", newSession)
      .then(() => {

        //Delete request
        axios.delete("http://localhost:8000/request/delete/" + id);

        Swal.fire({  
            icon: 'success',  
            title: 'Done!',  
            text: 'Session created!',
          }).then(() => {
              window.location = "/";
        });  

      })
      .catch((err) => {
        Swal.fire({  
            icon: 'error',  
            title: 'Oops...',  
            text: 'Error creating session!',
          }).then(() => {
            //   window.location = "/";
            });  

      });
 }


    return (
        <>
           
            <div className='col' style={{fontFamily: "Roboto"}}>
                <div className="flex-lg-column">
                    <div className="col-6" style={{color: "#7D7D7D", fontSize: "18px"}}>
                        <label> Request Details</label>
                    </div>

                    <div className="row">
                        <div className="col-auto" style={{marginLeft: "25px"}}>
                            <div className="row" style={{fontFamily: "Roboto"}}>
                                <div className="col" style={{marginLeft: "25px", marginRight: "25px"}}>

                                    <div className="row" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}>
                                        <label> Grade :</label>
                                    </div>

                                    <div className="row " style={{
                                        color: "#7D7D7D",
                                        marginTop: "-35px",
                                        marginLeft: "120px",
                                        fontSize: "24px"
                                    }}>
                                        <label> {data.data.data.grade} </label>
                                    </div>

                                    <div className="row" style={{
                                        color: "black",
                                        marginTop: "20px",
                                        fontWeight: "bold",
                                        fontSize: "24px"
                                    }}>
                                        <label> Subject :</label>
                                    </div>
                                    <div className="row " style={{
                                        color: "#7D7D7D",
                                        marginTop: "-30px",
                                        marginLeft: "120px",
                                        fontSize: "24px"
                                    }}>
                                        <label> {data.data.data.subject}</label>
                                    </div>

                                    <div className="row" style={{
                                        color: "black",
                                        marginTop: "20px",
                                        fontWeight: "bold",
                                        fontSize: "24px"
                                    }}>
                                        <label> Lesson :</label>
                                    </div>
                                    <div className="row " style={{
                                        color: "#7D7D7D",
                                        marginTop: "-30px",
                                        marginLeft: "120px",
                                        fontSize: "24px"
                                    }}>
                                        <label> {data.data.data.lesson}</label>
                                    </div>

                                    <div className="row" style={{
                                        color: "black",
                                        marginTop: "20px",
                                        fontWeight: "bold",
                                        fontSize: "24px"
                                    }}>
                                        <label> Additional Notes from the student :</label>
                                    </div>
                                    <div className="row " style={{
                                        color: "#7D7D7D",
                                        marginTop: "0px",
                                        marginLeft: "120px",
                                        fontSize: "24px"
                                    }}>
                                        <label> {data.data.data.note}</label>
                                    </div>

                                </div>

                                <hr  style={{color:"#000000",width:"1px",height:"500px",marginLeft:"30px",padding:"2px"}}>
                                </hr>
                            </div>

                        </div>

                        <div className="col" style={{marginLeft: "73px",marginRight:"73px"}}>
                            <div className="col-6" style={{color: "#7D7D7D", fontSize: "18px", marginTop: "-20px"}}>
                                <label> Session Details</label>
                            </div>

                            <div className="col-auto" style={{marginTop: "35px"}}>
                                <div className="col-6" style={{color: "black", fontWeight: "bold", fontSize: "24px"}}>
                                    <label> Date :</label>
                                </div>
                                <div className="col-6 " style={{marginTop: "-30px", marginLeft: "150px"}}>
                                    <input className="input" type="date"
                                                      onChange={(e) => {
                                                        setDate(e.target.value);
                                                      }}/>
                                </div>

                                <div className="col-6"
                                     style={{color: "black", fontWeight: "bold", fontSize: "24px", paddingTop: "12px"}}>
                                    <label> Time :</label>
                                </div>

                                <div className="col-6 " style={{marginTop: "-30px", marginLeft: "150px"}}>
                                    <input className="input" type="time"
                                                      onChange={(e) => {
                                                        setTime(e.target.value);
                                                      }}/>
                                </div>

                                <div>
                                <div className="col" style={{marginTop: "120px",marginLeft:"100px",marginBottom:"20px"}}>
                                <div className="col-6">
                                    <button className="session" onClick={sendData}>CREATE SESSION</button>
                                </div>

                            </div>
                                </div>
                                <div className="col"
                                     style={{
                                         justifyContent: "center",
                                         alignItems: "center",
                                         color: "#7C7C7C",
                                         marginLeft: "00px",
                                         fontSize: "18px",
                                         paddingTop: "12px"
                                     }}>
                                    <label style={{marginLeft:"36px"}}>“As developers of the ANONYMOUS TUTOR we </label>
                                </div>
                                <div className="col"
                                     style={{
                                         color: "#7C7C7C",
                                         marginLeft: "41px",
                                         fontSize: "18px",
                                         paddingTop: "12px"
                                     }}>
                                    <label>highly appreciate your hard work to make this </label>
                                </div>
                                <div className="col"
                                     style={{
                                         color: "#7C7C7C",
                                         marginLeft: "142px",
                                         fontSize: "18px",
                                         paddingTop: "12px"
                                     }}>
                                    <label>country smile again“ </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default SessionCardDetails;