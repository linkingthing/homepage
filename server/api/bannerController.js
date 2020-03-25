const express = require('express')
const router = express.Router()

const Banner = require('../modal/bannerModal')


router.post('/', (req, res) => {
    console.log(req)
    Banner.find().then((err, data) => {
        console.log(err)
        console.log(data)
    })
    res.json({ hehe: 12 })
})


router.get('/list', (req, res) => {
    Banner.find({}).then(( data) => {
        console.log(data)
    })
    res.json({ hehe: 1 })
})

module.exports = router
