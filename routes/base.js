const router = require('express').Router();
const ctrl = require('../controllers/');


router.get('/', ctrl.base.home);
router.get('/about', ctrl.base.about);
router.get('/contact', ctrl.base.contact)


module.exports = router;