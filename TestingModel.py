# from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
import cv2
import mediapipe as mp
import numpy as np
import time
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

drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)


cap = cv2.VideoCapture(0)

while cap.isOpened():
    successO, imageO = cap.read()

    start = time.time()

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
          

        
            if m < -10:
                text = "What are you looking at ?"
                cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (10, 9, 132), 2)
            elif m > 10:
                text = "What are you looking at ?"
                cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1,  (10, 9, 132), 2)
            elif n<-13:
                text="Wakie !! Wakie !!"
                cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (8, 8, 197), 2)
            else:
                text = "Looks attentive !"
                cv2.putText(image, text, (20, 30), cv2.FONT_HERSHEY_COMPLEX, 1, (20, 90, 2), 2)
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
                        cv2.putText(image, "Frustrated", (20, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), 2)                          #pass index of domiant emotion
                    elif (emotions[max_index]=="happiness"):
                        cv2.putText(image, "Happily Engaged", (20, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), 2)
                    elif (emotions[max_index]=="sadness"): 
                        cv2.putText(image, "Bored", (20, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), 2)
                    elif (emotions[max_index]=="neutral"): 
                        cv2.putText(image, "Engaged", (20, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), 2)
                    elif (emotions[max_index]=="suprise"):   
                        cv2.putText(image, "Confused", (20, 450), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 0, 0), 2)
                   


                
            # Display the nose direction
            nose_3d_projection, jacobian = cv2.projectPoints(nose_3d, rot_vec, trans_vec, cam_matrix, dist_matrix)

        
            cv2.putText(image, "By team BUG BUSTERS - All Rights Resesrved", (250, 470), cv2.FONT_HERSHEY_PLAIN, 1, (93, 93, 93), 2)
            
        

    cv2.imshow('Head Pose Estimation', image)

    if cv2.waitKey(5) & 0xFF == 27:
        break


cap.release()