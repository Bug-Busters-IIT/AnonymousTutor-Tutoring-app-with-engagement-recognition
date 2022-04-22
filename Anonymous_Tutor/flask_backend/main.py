from flask import Flask, render_template, Response
from flask_cors import CORS, cross_origin

import cv2


app = Flask(__name__)
CORS(app, support_credentials=True)

video = cv2.VideoCapture(0)

def get_frame(camera):
    successO, imageO = camera.read()
    while (successO):
        image = cv2.cvtColor(cv2.flip(imageO, 1), cv2.COLOR_BGR2RGB)
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        face_detector = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')       # detect the face ,crop, pass it to the detection model
        gray_frame = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)                                            # converting rgb to grayscale

            # detect faces available on camera
        num_faces = face_detector.detectMultiScale(gray_frame, 1.1, 6, minSize=(150, 150) )
        for (x, y, w, h) in num_faces:                                                             # accessing each faces
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), thickness=4)
        successO, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()

def get_prediction(camera):
    import mediapipe as mp
    import numpy as np
    from keras.models import model_from_json
    from keras.preprocessing import image as imageX

    # load json and create model
    json_file = open('TrainedModel/emotion_model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    emotion_model = model_from_json(loaded_model_json)           # convert the jason into the model
    #emotion model ready to do the predictions 
    # load weights in h5 file into new model
    emotion_model.load_weights("TrainedModel/emotion_model.h5")
    print("Loaded model from disk")


    mp_face_mesh = mp.solutions.face_mesh
    face_mesh = mp_face_mesh.FaceMesh(min_detection_confidence=0.5, min_tracking_confidence=0.5)

    mp_drawing = mp.solutions.drawing_utils

    while camera.isOpened():
        text = "Person not detected"
        successO, imageO = camera.read()

        # Flip the image horizontally for a later selfie-view display
        # Also convert the color space from BGR to RGB
        image = cv2.cvtColor(cv2.flip(imageO, 1), cv2.COLOR_BGR2RGB)

        # To improve performance
        image.flags.writeable = False

        # Get the result
        results = face_mesh.process(image)

        # To improve performance
        image.flags.writeable = True

        # Convert the color space from RGB to BGR
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        img_h, img_w, img_c = image.shape
        face_3d = []
        face_2d = []

    

        if results.multi_face_landmarks:
            for face_landmarks in results.multi_face_landmarks:
                for idx, lm in enumerate(face_landmarks.landmark):
                    if idx == 33 or idx == 263 or idx == 1 or idx == 61 or idx == 291 or idx == 199:
                        if idx == 1:
                            nose_2d = (lm.x * img_w, lm.y * img_h)
                            nose_3d = (lm.x * img_w, lm.y * img_h, lm.z * 3000)

                        n, m = int(lm.x * img_w), int(lm.y * img_h)

                        # Get the 2D Coordinates
                        face_2d.append([n, m])

                        # Get the 3D Coordinates
                        face_3d.append([n, m, lm.z])       
                
                # Convert it to the NumPy array
                face_2d = np.array(face_2d, dtype=np.float64)

                # Convert it to the NumPy array
                face_3d = np.array(face_3d, dtype=np.float64)

                # The camera matrix
                focal_length = 1 * img_w

                cam_matrix = np.array([ [focal_length, 0, img_h / 2],
                                        [0, focal_length, img_w / 2],
                                        [0, 0, 1]])

                # The distortion parameters
                dist_matrix = np.zeros((4, 1), dtype=np.float64)

                # Solve PnP
                success, rot_vec, trans_vec = cv2.solvePnP(face_3d, face_2d, cam_matrix, dist_matrix)

                # Get rotational matrix
                rmat, jac = cv2.Rodrigues(rot_vec)

                # Get angles
                angles, mtxR, mtxQ, Qx, Qy, Qz = cv2.RQDecomp3x3(rmat)

                # Get the y rotation degree
                n = angles[0] * 360
                m = angles[1] * 360
                z = angles[2] * 360
                

                text = "Person not detected"
                if m < -10:
                    text = "Distracted"
                    # cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (10, 9, 132), 2)
                elif m > 10:
                    text = "Distracted"
                    # cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1,  (10, 9, 132), 2)
                elif n<-13:
                    text="Sleeping"
                    # cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (8, 8, 197), 2)
                else:
                    text = "Looks attentive !"

                
                # cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (20, 90, 2), 2)
                emotions = ['neutral', 'happiness', 'suprise', 'sadness', 'anger', 'disgust', 'fear']
                
                if not successO:
                    break
                face_detector = cv2.CascadeClassifier('haarcascades/haarcascade_frontalface_default.xml')       # detect the face ,crop, pass it to the detection model
                gray_frame = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)                                            # converting rgb to grayscale

                    # detect faces available on camera
                num_faces = face_detector.detectMultiScale(gray_frame, 1.1, 6, minSize=(150, 150) )         # collect multiple images
                #take each face available on the camera and Preprocess it

                for (x, y, w, h) in num_faces:                                                             # accessing each faces
                    cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), thickness=4)
                    roi_gray = gray_frame[y:y + w, x:x + h]                                                # cropping and storing into one gray frame
                    roi_gray = cv2.resize(roi_gray, (48, 48))
                    img_pixels = imageX.img_to_array(roi_gray)
                    img_pixels = np.expand_dims(img_pixels, axis=0)
                    img_pixels /= 255.0

                    predictions =emotion_model.predict(img_pixels)
                    max_index = int(np.argmax(predictions))

                                        
                    if (emotions[max_index]=="anger"):
                        text = "ENGAGED  but looking FRUSTRATED"
                    elif (emotions[max_index]=="happiness"):
                        text = "HAPPILY ENGAGED"
                    elif (emotions[max_index]=="sadness"): 
                        text = "ENGAGED but looking BORED"
                    elif (emotions[max_index]=="neutral"): 
                        text = "ENGAGED"
                    elif (emotions[max_index]=="suprise"):   
                        text = "ENGAGED  but looking CONFUSED"

                return text
        else:
            return text

@app.route('/')
def index():
    return render_template('index.js')
    
def gen(camera):
    while True:
        frame = get_frame(camera)
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
               
@app.route('/video_feed')
@cross_origin(supports_credentials=True)
def video_feed():
    return Response(gen(video),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

def test(camera):
    text = get_prediction(camera)
    return text
           
@app.route('/profile')
@cross_origin(supports_credentials=True)
def my_profile():
    text = test(video)
    response_body = {
        "test":text,
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=False)
