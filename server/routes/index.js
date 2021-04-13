const Router = require('express');
const router = new Router();
const tourRouter = require('./tourRouter');
const userRouter = require('./userRouter');
const accomRouter = require('./accomRouter');

router.use('/user', userRouter);
router.use('/tour', tourRouter);
router.use('/accommodation', accomRouter);

module.exports = router;