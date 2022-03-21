 const myExpress = require('express');
 const router = myExpress.Router();

 const usersPost = require('../controllers/posts_controller');

 router.get('/posts', usersPost.posts);

 module.exports = router;

