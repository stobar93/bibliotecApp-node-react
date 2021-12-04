const {Router} = require('express');
const router = Router();
const bookRouter = require('./book');
const userRouter = require('./user');


router.get("/", (req, res)=>{
    res.status(200).send("Hello world!")
})

router.use('/book', bookRouter);
router.use('/user', userRouter);

module.exports = router;