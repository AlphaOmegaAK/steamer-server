const router = require('express').Router();
const ctrl = require('../controllers');



router.get('/', ctrl.posts.index);

modules.exports = router;