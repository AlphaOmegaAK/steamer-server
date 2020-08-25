const router = require('express').Router();
const ctrl = require('../controllers/');

router.get('/', ctrl.users.index);
router.get('/:id', ctrl.users.show);
router.post('/', ctrl.users.create);
router.put('/:id', ctrl.users.update);
router.delete('/:id', ctrl.users.destroy);

router.post('/:userId/createpost', ctrl.users.addPost)
// id = userId
module.exports = router;