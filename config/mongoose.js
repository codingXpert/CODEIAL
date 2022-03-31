//require the library
const Mongoose = require('mongoose');

//connect to the database
Mongoose.connect('mongodb://localhost/codeial-db');

//acquire the connection (to check if it is successful)
const db = Mongoose.connection;

//error
db.on('error', console.error.bind(console , "error connecting to db"));

// up and successful running
db.once('open' , function(){
    console.log('Successfuly connected to the database');
});
