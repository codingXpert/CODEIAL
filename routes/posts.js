 const myExpress = require('express');
 const router = myExpress.Router();

 const postController = require('../controllers/posts_controller');

 router.post('/create', postController.create);

 module.exports = router;

