const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req , res){
console.log('inside create comments controler')
console.log('req.body' , req.body);
    Post.findById(req.body.post , function(err , post){

        if(post){
            Comment.create({
                content:req.body.content ,
                post:req.body.post , 
                user:req.user._id
            } , function(err , comment){
                //handle error
                
console.log('******** comment' , comment);
                post.comments.push(comment);
                post.save();
                console.log('exit create comments controler')
                res.redirect('/')
            });
        }
    });
}








// const Comment = require('../models/comment');
// const Post = require('../models/post');

// module.exports.create = function(req, res){
//     Post.findById(req.body.post, function(err, post){

//         if (post){
//             Comment.create({
//                 content: req.body.content,
//                 post: req.body.post,
//                 user: req.user._id
//             }, function(err, comment){
//                 // handle error

//                 post.comments.push(comment);
//                 post.save();

//                 res.redirect('/');
//             });
//         }

//     });
// }