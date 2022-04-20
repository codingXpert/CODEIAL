const myExpress = require('express');
const router = myExpress.Router();
const homeController = require ('../controllers/home_controller');

console.log('router loaded');

router.get('/' , homeController.myHome);
router.use('/users' , require('./users'));
router.use('/posts' , require('./posts'));
router.use('/comments' , require('./comments'));

router.use('/api' , require('./api'));

//FOR ANY FURTHER ROUTERS , ACCESS FROM HERE
// router.use('/routerName' , require('./routerFile'));


module.exports = router; //makes router available for index.js

