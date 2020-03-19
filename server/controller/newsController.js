const express = require('express')
const News = require('../modal/newsModal')

const router = express.Router()


router.get('/list', (req, res) => {
    News.find().then((err, data) => {
        console.log(err)
        console.log(data)
    })
    res.json({ hehe: 1 })
})

module.exports = router
