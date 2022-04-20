const myExpress = require('express');
const router = myExpress.Router();
const usersApi = require('../../../controllers/api/v1/users_api');



router.post('/create-session' , usersApi.createSession);

module.exports = router;