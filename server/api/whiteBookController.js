
const express = require('express')
const WhiteBook = require('../modal/whiteBookModal')
const sendEmail = require('../middleware/sendEmail')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

/**
 * @api {Post} /whiteBook 创建白皮书下载者信息
 * @apiName PostWhiteBook
 * @apiGroup WhiteBook
 *
 * @apiParam {String} cname 姓名.
 * @apiParam {String} email 邮箱.
 * @apiParam {String} phone 手机.
 * @apiParam {String} company 公司.
 * 
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} phone 手机.
 * @apiSuccess {String} company 公司.
 */
router.post('/', sendEmail)
router.post('/', (req, res) => {
    WhiteBook.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    })
})

/**
 * @api {get} /whiteBook 请求白皮书下载者信息列表
 * @apiName GetWhiteBook
 * @apiGroup WhiteBook
 *
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} phone 手机.
 * @apiSuccess {String} company 公司.
 */
router.get('/', authMiddleware)
router.get('/', (req, res) => {
    WhiteBook.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })
    })
})


module.exports = router

