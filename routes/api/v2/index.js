const myExpress = require('express');
const router = myExpress.Router();

router.use('/posts' , require('./posts'));

module.exports = router;