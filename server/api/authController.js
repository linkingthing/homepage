const express = require('express')
const router = express.Router()

const User = require('../modal/userModal')


/**
 * @api {Post} /auth/login 登录
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} username 姓名.
 * @apiParam {String} password 邮箱.
 * 
 * @apiSuccess {String} username 姓名.
 */



router.post('/login', (req, res) => {
    console.log(req.body)
    console.log(req.session)
    const { username, password } = req.body
    User.findOne({ username }).then(data => {
        console.log(data)
        if (data) {
            if (data.password === password) {
                req.session.username = username
                req.session.isLogin = true
                res.json({
                    code: 200,
                    data: { username },
                    message: '登录成功'
                })
            } else {
                res.json({
                    code: 401.1,
                    message: '账户或密码错误'
                })
            }
        }
        else {
            res.json({
                code: 401.1,
                message: '账户不存在'
            })
        }
    })
})

/**
 * @api {Get} /auth/logout 退出登录
 * @apiName Logout
 * @apiGroup Auth
 */
router.get('/logout', (req, res) => {
    req.session = {}
    res.json({
        data: null,
        code: 200,
        message: '注销成功'
    })
})

module.exports = router