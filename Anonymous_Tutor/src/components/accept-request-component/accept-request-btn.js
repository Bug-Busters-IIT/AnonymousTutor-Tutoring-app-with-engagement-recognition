import {useNavigate} from "react-router-dom";

const AcceptRequestBtn = (data) => {
    console.log("note:" + data.data.notes_for_tutor);
    const navigate2 = useNavigate()
    return (
        <>
            <div className="row" style={{marginTop: "100px",marginRight:"50px",marginBottom:"30px"}}>
                <div className="col-6">
                   
                    <button className="accept-request-btn" onClick={()=>{navigate2('/session_details', 
                    { state: { grade:data.data.grade, subject: data.data.subject, lesson: data.data.lesson, note:data.data.subject, email:data.data.email, id:data.data._id, note:data.data.notes_for_tutor } })}}>ACCEPT REQUEST</button>

                </div>
            </div>
        </>
    );
};
export default AcceptRequestBtn;