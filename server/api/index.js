const router = require('express').Router();

router.use('/news', require('./newsController'))
router.use('/company', require('./companyController'))
router.use('/banner', require('./bannerController'))
router.use('/common', require('./commonController'))
router.use('/customer', require('./customerController'))
router.use('/guestbook', require('./guestbookController'))
router.use('/whitebook', require('./whiteBookController'))

module.exports = router