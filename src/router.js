const router = require('express').Router();

const loginRouter = require('./routes/loginRouter');

router.use('/login', loginRouter);
// router.use('/admin', adminRouter);

module.exports = router;