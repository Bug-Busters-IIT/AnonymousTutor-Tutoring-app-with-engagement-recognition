import React, { useState,useEffect } from "react";
import axios from "axios";
import Background from "../../images/backgroundDark.png";
import Image from "./image-component";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" +  Background  + ")",
  backgroundSize: 'cover'
};


function JoinSession() {
  
  


   // new line start
  const [profileData, setProfileData] = useState(null)
  Notification.requestPermission()
  
  useEffect(() => {
    const interval = setInterval(async () => {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        engagement:res.engagement}))
        if (res.engagement == "Distracted"){
          new Notification('Alert from Engagement Detector',{ 
            body:"Hey! you are Distracted",
          });
        }
        if (res.engagement == "Person not detected"){
          new Notification('Alert from Engagement Detector',{ 
            body:"Hey! where are you?",
          });
        }
        if (res.engagement == "Sleeping"){
          new Notification('Alert from Engagement Detector',{ 
            body:"Hey! Are you sleeping? WAKE UP!",
          });
        }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
    
   
      
    
  }, 10000);
  return () => clearInterval(interval);
  }, []);
    //end of new line 
  return (
    
    <div className="App" >
      <header className="App-header">
        <div style={{height:"100%"}}>
          <Image/>
            <center>
              <h1  style={{paddingTop:"20px",fontFamily:"Lucida Console",color:"#174796"}}>Engagement Detection System</h1>
              <img
              src="http://localhost:5000/video_feed"
              alt="Video"
              style={{marginTop:"50px"}}
              />
              {profileData && <div style={{marginTop:"20px"}}>
                  <p style={{fontSize:"30px", fontFamily:"Lucida Console"}} > Engagement Status: {profileData.engagement}</p>
                  {/* <p>About me: {profileData.about_me}</p> */}
                </div>
              }
            </center>
          </div>
        

        {/* new line start*/}
        
         {/* end of new line */}
      </header>
    </div>
    
  );
}

export default JoinSession;

