# SDGP PROJECT- Bug Busters- SE 20
------------------------------------

We are team Bug Busters, comprising five second year students following BEng(Hons) Software Engineering at the Informatics Institute of Technology affiliated with University of Westminster, UK. 

In general, a majority of students need an extra support in the subjects they learn. It is also visible that a set of Individuals who are willing to support students as tutors, lack a specific platform for getting interacted with students. As the student engagement in an online platform is comparatively low, apparently a system which connects students and tutors seems needy. As a result, we planned to create a web application for an online tutoring platform which fulfills the need of identifying student engagement realtime.



# Installing Guide lines


## Installing for the first time




Open Command Prompt

Flask server
------------------------------------
 
  * Navigate to Anonymous Tutor/flask_backend:

  * Create a virtual python environment
 
 
             py -m env env</dd>

  * Activate the created environment
 
 
             .\env\Scripts\activate

  * Install the required libraries
 
 
             pip install flask
 
             pip install python-dotenv
 
             pip install mediapipe
 
             pip install tensorflow
 
 

  * create a .flaskenv and add the following code into it


             FLASK_APP=main.py</dd>
                        
             FLASK_ENV=development</dd>

  * run flask server


             flask run
  

 Install required npm libraries
------------------------------------


             npm install axios
             
             
             npm install nodemon
 
To Start the nodemon server
------------------------------------

  * Navigate to Anonymous Tutor/backend:


            nodemon server
  
  * If the above code display an error install following libraries:


            npm install cors


            npm install cookie-session


            npm install cookie-parser


            npm install express-session


            npm install connect-mongodb-session


            npm install nodemailer


            npm install bcrypt
  
To start React application  
------------------------------------
  * Navigate to Anonymous Tutor  


            npm install


            npm start



