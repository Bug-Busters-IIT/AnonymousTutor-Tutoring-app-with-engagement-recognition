const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const session = require('express-session');
var cookieSession = require('cookie-session');
var cookieparser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
var nodemailer = require('nodemailer');



const app = express();
app.set('trust proxy', 1);
// app.use(cors());
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(cookieparser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.set('trust proxy', true);

// parse application/json
app.use(bodyParser.json())

const store = new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: process.env.COLLECTION
});


const PORT = process.env.PORT || 8000;

//Mongo connection
const connectDB = async () => { 
    try {
        await
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

//Sessioon
// app.use(
//     session({
//         resave: false,
//         saveUninitialized: false,
//         secret: 'debug',
//         cookie: { secure: false }
//     })
// );


// app.use(cookieSession({
//     name: 'session'
//     , secret: "abcdef"
//     , httpOnly: true
//     , maxAge: 30 * 60 * 1000
//     , secure: false
//     , overwrite: false
// }));

app.use(session({
    secret: 'secret token',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    store: store,
    name: 'session cookie name',
    genid: (req) => {
       
    },
    cookie: { secure: false }

}));







//Port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

app.use(cors({
    origin: function(origin, callback){
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true
  }));

// app.use(cors(corsOptions)) // Use this after the variable declaration


//Routes
const userData = require('./routes/users');
app.use('/user', userData);

const requestData = require('./routes/requests');
app.use('/request', requestData);

const sessionData = require('./routes/onlineSessions')
app.use('/session', sessionData);