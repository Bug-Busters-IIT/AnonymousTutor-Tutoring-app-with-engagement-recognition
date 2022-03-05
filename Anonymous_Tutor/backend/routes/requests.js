const router = require('express').Router();
const { Router } = require('express');
let request = require("../models/request.js");


//Create
router.route("/add_request").post((req, res, next)=>{

    console.log(req.session);

    //Get data
    const grade = Number(req.body.grade);
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    const notes_for_tutor = req.body.notes_for_tutor;
    const email = req.body.email;
    const id = req.body.id;

    //Add data to model
    const newRequest = new request({
        grade,
        subject,
        lesson,
        notes_for_tutor,
        email,
    });

    //Save to database
    newRequest.save().then(()=>{
        res.json("Request Added");
    }).catch((err)=>{
        console.log(`Error: ${err}`);
    }) 

});


//View
router.route("/all_requests").get((req, res, next)=>{

    //Get all student data from databse
    request.find().then((data)=>{

        //Send data as json
        res.json(data);

    }).catch((err)=>{
        console.log(`Error: ${err}`);
    })
});


router.route("/delete/:id").delete(async (req, res) => {

    //Get ID
    let id = req.params.id;

    await request.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Request deleted"});
    }).catch(err => {
        console.log(`Error: ${err}`);
        res.status(500).send({status: "Delete error"});
    });

});

module.exports = router;