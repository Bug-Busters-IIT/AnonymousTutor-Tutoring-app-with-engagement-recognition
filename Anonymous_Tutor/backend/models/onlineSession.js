const mongoose =  require('mongoose');
const bcrypt =  require('bcrypt');


const schema = mongoose.Schema;

//Schema
const onlineSessionSchema = new schema ({
    grade: {
        type: Number,
        required: true
    },

    subject: {
        type: String,
        required: false
    },

    lesson: {
        type: String,
        required: false
    },

    notes_for_students: {
        type: String,
        required: false
    },

    date: {
        type: String,
        required: false
    },

    time: {
        type: String,
        required: false
    },
    
});
    

//Model
const onlineSession = mongoose.model('onlineSession',onlineSessionSchema);

//Export module
module.exports =onlineSession;