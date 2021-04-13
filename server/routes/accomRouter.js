const Router = require('express');
const router = new Router();
const accomController = require('../controllers/accomController');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole("ADMIN"), accomController.create);
router.get('/', accomController.getAll);
router.get('/:id', accomController.getOne);
router.delete('/', accomController.delete)

module.exports = router;

