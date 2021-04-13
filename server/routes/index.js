const Router = require('express');
const router = new Router();
const tourRouter = require('./tourRouter');
const userRouter = require('./userRouter');
const accomRouter = require('./accomRouter');
const orderRouter = require('./orderRouter');

router.use('/user', userRouter);
router.use('/tour', tourRouter);
router.use('/accommodation', accomRouter);
router.use('/order', orderRouter);

module.exports = router;