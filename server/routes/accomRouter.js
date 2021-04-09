const Router = require('express');
const router = new Router();
const accomController = require('../controllers/accomController');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', /*checkRole("MANAGER"),*/ accomController.create);
router.get('/', accomController.getAll);
router.get('/:id', accomController.getOne);
router.delete('/', accomController.delete)

module.exports = router;

