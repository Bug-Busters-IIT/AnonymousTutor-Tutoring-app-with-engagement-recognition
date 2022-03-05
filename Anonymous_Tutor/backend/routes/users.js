const router = require('express').Router();
const { Router } = require('express');
// const { default: UserEngagementCard } = require('../../src/components/join-session-component/warning-card-component/user-engagement-card.js');
let user = require("../models/user.js");
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

var dotenv = require('dotenv');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });


/**
 * 
 * Routes for CRUD
 * 
**/

async function hashPassword(password) {
    try{
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(password, salt);
        return hashPass;
    }
    catch
    {
        console.log("Error");
        return "Error";
    }
}


//ADD
router.route("/signup").post( async (req, res)=>{

    //Get data
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const role = req.body.role;
    const username = req.body.username;
    let password = req.body.password;

    password = (await hashPassword(password)).toString();

    //Add data to model
    const newuser = new user({
       first_name,
       last_name,
       email,
       phone,
       gender,
       role,
       username,
       password

    });

    //Save to database
    newuser.save().then(()=>{

        var mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Signup',
            text: 'You have successfully signed up'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


        res.json("user Added");
    }).catch((err)=>{
        console.log(`Error: ${err}`);
        return res.status(422).send(err);
    }) 

});


//View
router.route("/user").get((req, res)=>{

    //Get all user data from databse
    user.find().then((data)=>{

        //Send data as json
        res.json(data);

    }).catch((err)=>{
        console.log(`Error: ${err}`);
    })
});


/*
//View
router.route("/get/:id").get((req, res)=>{
    console.log(id);
    //Get all user data from databse
    user.findById().then((data)=>{
        //Send data as json
        res.json(data);
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    })
});
*/


//Update
router.route("/resetpass").put(async (req, res, next)=>{

    //Get data
    const username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    user.findOne({username}, async function(err, User) {

        if(err) {
            console.log(`Error: ${err}`);
            return res.status(500).send({status: "Error getting data"});
        }
        else{

            password = (await hashPassword(password)).toString();

            User.updateOne({password: password}, function(err, result) {
                if(err) {
                    console.log(`Error: ${err}`);
                    return res.status(500).send({status: "Error updating data"});
                }
                else{

                    var mailOptions = {
                        from: process.env.EMAIL,
                        to: email,
                        subject: 'Reset Password',
                        text: 'Password of your Anonymous Tutor account has been changed successfully'
                      };
                      
                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });

                    console.log(`Success: ${result}`);
                    return res.status(200).send({status: "Successfully updated data"});
                }
            });
      
        }
    });

});



//Login
router.post('/login', (req, res, next) => {
    const username =  req.body.username;
    const password = req.body.password;
  
    if(!username) {
      return res.status(422).json({
        errors: {
          username: 'is required',
        },
      });
    }
  
    if(!password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
}
  

    user.findOne({username}, async function(err, User) {

        if(err) {
            console.log(`Error: ${err}`);
            return res.status(500).send({status: "Error getting data"});
        }
        else{
            try{
                if(await bcrypt.compare(password, User.password)){

                    req.session.user = User;
                    req.session.isLoggedIn = true;

                    req.session.save(() => {
                        // console.log(req.session);
                    });
    
                    return res.send({status: "user", user: User});
            }
            else{
               
                return res.status(422).json({
                    errors: {
                        password: 'is incorrect',
                    },
                });
            }
        }
            catch(err){
                console.log(`Error: ${err}`);
                return res.status(500).send({status: "Error getting data"});
            }
         
        }
          
});


  });
  


module.exports = router;