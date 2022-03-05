const RequestDetails = ({reqdata}) =>
{
    console.log("reqnote " + reqdata.notes_for_tutor)

    return (
        <>
            <div className="row" style={{fontFamily:"Roboto"}}>
                <div className="col" style={{marginLeft: "25px",marginRight:"25px"}}>

                    
                    <div className="row" style={{color: "black",marginTop:"20px", fontWeight: "bold", fontSize: "24px"}}>
                        <label> Grade :</label>
                    </div>
                    <div className="row " style={{color:"#7D7D7D",marginTop: "-30px", marginLeft: "120px",fontSize:"24px"}}>
                        <label> {reqdata.grade}</label>
                    </div>

                    <div className="row" style={{color: "black",marginTop:"20px", fontWeight: "bold", fontSize: "24px"}}>
                        <label> Subject :</label>
                    </div>
                    <div className="row " style={{color:"#7D7D7D",marginTop: "-30px", marginLeft: "120px",fontSize:"24px"}}>
                        <label> {reqdata.subject} </label>
                    </div>

                    <div className="row" style={{color: "black",marginTop:"20px", fontWeight: "bold", fontSize: "24px"}}>
                        <label> Lesson :</label>
                    </div>
                    <div className="row " style={{color:"#7D7D7D",marginTop: "-30px", marginLeft: "120px",fontSize:"24px"}}>
                        <label> {reqdata.lesson}</label>
                    </div>

                    <div className="row" style={{color: "black",marginTop:"20px", fontWeight: "bold", fontSize: "24px"}}>
                        <label> Additional Notes for the student :</label>
                    </div>
                    <div className="row " style={{color:"#7D7D7D",marginTop: "0px", marginLeft: "120px",fontSize:"24px"}}>
                        <label> {reqdata.notes_for_tutor}</label>
                    </div>
                </div>
            </div>

        </>
    );
};
export default RequestDetails;