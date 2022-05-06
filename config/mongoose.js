//require the library
const Mongoose = require('mongoose');
const env =require('./environment');

//connect to the database
Mongoose.connect(`mongodb://localhost/${env.db}`);

//acquire the connection (to check if it is successful)
const db = Mongoose.connection;

//error
db.on('error', console.error.bind(console , "error connecting to db"));

// up and successful running
db.once('open' , function(){
    console.log(' Connected to the database :: MongoDB');
});

module.exports= db;
