const nodemailer =  require("nodemailer");
const ejs = require('ejs');
const path = require('path');




let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false, //not using two factor authentication
    auth:{
        user:'your email',
        pass:'your password'
    }
});

let renderTamplate = (data , relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname , '../views/mailers' , relativePath),
        data,
        function(err , tamplet){
            if(err){console.log('error in rendering tamplet'); return}


            mailHTML = tamplet;
        }
    )

    return mailHTML;
} 

module.exports = {
    transporter:transporter,
    renderTamplet:renderTemplet
}

 