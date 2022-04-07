const Post = require('../models/post');


module.exports.myHome = function (req, res) {




// populate the user of each post
Post.find({})
.populate('user')
.populate({
    path:'comments',
    populate:{
        path:'user'
    }
})
.exec(function(err, posts){
    return res.render('home', {
        title: "Codeial | Home",
        posts:  posts
    });
});




 }  
