const express = require('express')
const Guestbook = require('../modal/guestbookModal')
const sendEmail = require('../middleware/sendEmail')
const router = express.Router()

/**
 * @api {Post} /guestbook 创建留言簿
 * @apiName PostGuestbook
 * @apiGroup Guestbook
 *
 * @apiParam {String} cname 姓名.
 * @apiParam {String} email 邮箱.
 * @apiParam {String} message  内容.
 * 
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} message 内容.
 */
router.post('/', sendEmail)
router.post('/', (req, res) => {
    Guestbook.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    })
})

/**
 * @api {get} /guestbook 请求留言列表
 * @apiName GetGuestbook
 * @apiGroup Guestbook
 *
 * @apiParam {Number} current 当前页，默认1.
 * @apiParam {Number} pageSize 分页大小，默认10.
 *
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} message 内容.
 */
router.get('/', (req, res) => {
    Guestbook.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })
    })
})

module.exports = router