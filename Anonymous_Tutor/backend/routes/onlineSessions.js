const router = require('express').Router();
const { Router } = require('express');
let session = require("../models/onlineSession.js");


var nodemailer = require('nodemailer');
var dotenv = require('dotenv');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });



router.route("/create_session").post((req, res)=>{

    //Get data
    const grade = req.body.grade;
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    const notes_for_students = req.body.notes_for_students;
    const date = req.body.date;
    const time = req.body.time;
    const email = req.body.email;

    //Add data to model
    const newSession = new session({
        grade,
        subject,
        lesson,
        notes_for_students,
        date,
        time,
    });

    //Save to database
    newSession.save().then(()=>{

        var mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'New Session',
            text: 'New Session has been scheduled on ' + date + ' from ' + time + ' for ' + 'Grade ' + grade + ' ' + subject + '-' + lesson
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        res.json("session Added");
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    }) 

});


//View
router.route("/all_sessions").get((req, res)=>{

    //Get all student data from databse
    session.find().then((data)=>{

        //Send data as json
        res.json(data);

    }).catch((err)=>{
        console.log(`Error: ${err}`);
    })
});


module.exports = router;