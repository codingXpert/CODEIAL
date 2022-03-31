const myExpress = require('express');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts'); 
const db = require('./config/mongoose');
const app = myExpress();
const port = 8000;



app.use(myExpress.urlencoded());

//use cookie
app.use(cookieParser());

//using CSS
app.use(myExpress.static('./assets'));

app.use(expressLayout);
//extract styles and scripts from pages into the layoout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);


//USE EXPRESS ROUTER
app.use('/' , require('./routes'));

app.set('view engine' ,'ejs');
app.set('views' , './views');



//CREATING SERVER
app.listen(port , function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});


