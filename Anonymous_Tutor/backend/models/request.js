const mongoose =  require('mongoose');
const bcrypt =  require('bcrypt');


const schema = mongoose.Schema;

//Schema
const requestSchema = new schema ({
    grade: {
        type: Number,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    lesson: {
        type: String,
        required: true
    },

    notes_for_tutor: {
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    }

});
    

//Model
const request = mongoose.model('Requests',requestSchema);

//Export module
module.exports =request;