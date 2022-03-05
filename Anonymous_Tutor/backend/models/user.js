const mongoose =  require('mongoose');
const bcrypt =  require('bcrypt');


const schema = mongoose.Schema;

//Schema
const  userSchema = new schema ({
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: false
    },

    gender: {
        type: String,
        required: false
    },

    role: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique : true
        
    },

    password: {
        type: String,
        required: true
    },
});
    

//Model
const user = mongoose.model('Users', userSchema);

//Export module
module.exports = user;