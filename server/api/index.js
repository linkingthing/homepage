const router = require('express').Router();

router.use('/news', require('./newsController'))
router.use('/company', require('./companyController'))

module.exports = router