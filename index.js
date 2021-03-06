
const port = 8000;
const myExpress = require('express');
const env = require('./config/environment');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts'); 
const db = require('./config/mongoose');
const app = myExpress();
//used for session cookie
const session = require('express-session'); 
const passport  = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware'); 
const flash = require('connect-flash');
const customMware = require('./config/middleware');

//setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');




const path = require('path');

//using sass middleware
app.use(sassMiddleware({
    src:path.join(__dirname , env.asset_path , 'scss'),
    dest:path.join(__dirname , env.asset_path , 'css'),
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));


app.use(myExpress.urlencoded());

//use cookie
app.use(cookieParser());


//using CSS
app.use(myExpress.static(env.asset_path));
//make the uploades path available to the browser
app.use('/uploads' , myExpress.static(__dirname + '/uploads'));

app.use(expressLayout);
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);
//extract styles and scripts from pages into the layoout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);



app.set('view engine' ,'ejs');
app.set('views' , './views');

//mongo store is used to store the session cookie in the db
app.use(session({
    name:'codeial' , 
    //TODO change the secret before deployment in production mode
    secret:env.session_cookie_key,
    saveUninitialized:false.valueOf,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore(
        {
        mongooseConnection:db,
        autoRemove:'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
        )
}));


//initilization of passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);  

//USE EXPRESS ROUTER
app.use('/' , require('./routes'));

//CREATING SERVER
app.listen(port , function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});


