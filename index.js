
const port = 8000;
const myExpress = require('express');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts'); 
const db = require('./config/mongoose');
const app = myExpress();
//used for session cookie
const session = require('express-session'); 
const passport  = require('passport');
const passportLocal = require('./config/passport-local-strategy');





app.use(myExpress.urlencoded());

//use cookie
app.use(cookieParser());

//using CSS
app.use(myExpress.static('./assets'));

app.use(expressLayout);
//extract styles and scripts from pages into the layoout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);




app.set('view engine' ,'ejs');
app.set('views' , './views');


app.use(session({
    name:'codeial' , 
    //TODO change the secret before deployment in production mode
    secret:'blashsomething',
    saveUninitialized:false.valueOf,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));


//initilization of passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//USE EXPRESS ROUTER
app.use('/' , require('./routes'));

//CREATING SERVER
app.listen(port , function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});


