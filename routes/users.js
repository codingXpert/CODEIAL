const myExpress = require('express');
const router = myExpress.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile' , usersController.profile);

module.exports = router; 