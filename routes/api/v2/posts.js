const myExpress = require('express');
const router = myExpress.Router();
const postsApi = require('../../../controllers/api/v1/posts_api');

router.get('/', postsApi.index);


module.exports = router;