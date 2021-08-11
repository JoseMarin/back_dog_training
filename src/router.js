const router = require('express').Router();

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/post', postRouter);
// router.use('/admin', adminRouter);

module.exports = router;