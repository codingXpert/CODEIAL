const myExpress = require('express');
const app = myExpress();
const port = 8000;

//USE EXPRESS ROUTER
app.use('/' , require('./routes'));

//CREATING SERVER
app.listen(port , function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});


