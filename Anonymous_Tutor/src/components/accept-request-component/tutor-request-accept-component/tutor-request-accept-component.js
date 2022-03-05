import AcceptRequestBtn from "../accept-request-btn";
import TutorRequestDetails from "./tutor-request-details";
import "../../../fonts/Roboto-Regular.ttf"

const TutorRequestAcceptComponent = () => {
    return (
        <>
            <div className="col">
                <div className="card2">
                    <div className="card-body">
                        <TutorRequestDetails/>
                    </div>
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <AcceptRequestBtn/>
                    </div>
                </div>

            </div>
        </>
    );
};
export default TutorRequestAcceptComponent;