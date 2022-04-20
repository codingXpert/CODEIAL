const myExpress = require('express');
const router = myExpress.Router();

router.use('/posts' , require('./posts'));
router.use('/users' , require('./users'));

module.exports = router;