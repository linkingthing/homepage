const router = require('express').Router();

router.use('/news', require('./newsController'))
router.use('/company', require('./companyController'))
router.use('/banner', require('./bannerController'))
router.use('/common', require('./commonController'))

module.exports = router