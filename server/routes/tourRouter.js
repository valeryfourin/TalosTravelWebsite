const Router = require('express');
const router = new Router();
const tourController = require('../controllers/tourController');
const checkRole = require('../middleware/checkRoleMiddleware');


router.post('/', checkRole("MANAGER"), tourController.create);
router.get('/', tourController.getAll);
router.get('/:id', tourController.getOne);
router.delete('/', tourController.delete)

module.exports = router;