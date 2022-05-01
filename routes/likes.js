const myExpress = require('express');
const router = myExpress.Router();
const likesController = require('../controllers/likes_controller');


router.post('/toggle', likesController.toggleLike);


module.exports = router;