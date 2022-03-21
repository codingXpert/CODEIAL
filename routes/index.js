const myExpress = require('express');
const router = myExpress.Router();
const homeController = require ('../controllers/home_controller');

console.log('router loaded');

router.get('/' , homeController.myHome);


module.exports = router; //makes router available for index.js

