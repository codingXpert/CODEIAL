const Post = require('../models/post');
const { post } = require('../routes');

module.exports.myHome = function (req, res) {


//     Post.find({}, function (err, posts) {

//         return res.render('home', {
//             title: 'Codial || Home',
//             posts: posts
//         });

//     });

// populate the user of each post
Post.find({}).populate('user').exec(function(err, posts){
    return res.render('home', {
        title: "Codeial | Home",
        posts:  posts
    });
});

 }  
