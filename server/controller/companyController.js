const express = require('express')
const Company = require('../modal/companyModal')

const router = express.Router()


router.get('/info', (req, res) => {
    Company.find().then((err, data) => {
        console.log(err)
        console.log(data)
    })
    res.json({ Company: 1 })
})

module.exports = router
