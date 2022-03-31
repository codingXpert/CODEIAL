const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},
{
    // USED FOR CREATED AT AND UPDATED AT
    timestamps:true
});


// TELLING MONGOOSE THAT IT IS A  MODEL
const User = mongoose.model('User' , userSchema);

module.exports = User;
