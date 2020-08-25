const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.post('/verify', ctrl.auth.verify);

// GET in Production

module.exports = router;