import RequestImageComponent from "./image-component/request-image-component";
import RequestCardAcceptComponent from "./card-component/request-card-accept-component";
import TutorRequestAcceptComponent from "./tutor-request-accept-component/tutor-request-accept-component";
import Progressbar from "./progressbar-component/progress-bar";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const AcceptRequestHome = () => {

    const [requests, setRequest] = useState([]);

    useEffect(()=>{

        //Get data
        const getrequest = () =>{
            axios.get("http://localhost:8000/request/all_requests").then((res)=>{
            setRequest(res.data);
            }).catch((err)=>{
                alert('Error fetching data');
            });
        }

        getrequest();
        console.log()

    }, []);

    // console.log(requests);



    return (
        <>
            <div >
            <RequestImageComponent/>
                {/* Background image */}
                <div className="image2" style={{overflowX:"scroll"}}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    </div>
                        

                       
                        <div >
                            <div style={{ display:"flex", flex:1, flexDirection:'row'}}>
                            {requests.map((request) => (
                                <div style={{margin:10 }}>
                                   {console.log("****" + request.notes_for_tutor)}
                                <RequestCardAcceptComponent data={request}/>
                                </div>
                                
                            ))}
                            </div>

                        </div>
                    </div>
                </div>
        </>
    );
};
export default AcceptRequestHome;