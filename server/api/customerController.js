const express = require('express')
const Customer = require('../modal/customerModal')

const router = express.Router()


/**
 * @api {Post} /customer 创建客户/咨询/技术申请
 * @apiName PostCustomer
 * @apiGroup Customer
 *
 * @apiParam {String} cname 姓名.
 * @apiParam {String} email 邮箱.
 * @apiParam {String} phone 手机号.
 * @apiParam {String} city  城市.
 * @apiParam {String} company  公司名.
 * @apiParam {String} industry  行业.
 * @apiParam {String} job  职位.
 * @apiParam {String} product  产品/解决方案.
 * @apiParam {String} budget  预算.
 * @apiParam {String} describe  描述.
 * 
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} phone 手机号.
 * @apiSuccess {String} city  城市.
 * @apiSuccess {String} company  公司名.
 * @apiSuccess {String} industry  行业.
 * @apiSuccess {String} job  职位.
 * @apiSuccess {String} product  产品/解决方案.
 * @apiSuccess {String} budget  预算.
 * @apiSuccess {String} describe  描述.
 */
router.post('/', (req, res) => {
    Customer.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    })
})

/**
 * @api {get} /customer 请求客户列表
 * @apiName GetCustomer
 * @apiGroup Customer
 *
 * @apiSuccess {String} cname 姓名.
 * @apiSuccess {String} email 邮箱.
 * @apiSuccess {String} phone 手机号.
 * @apiSuccess {String} city  城市.
 * @apiSuccess {String} company  公司名.
 * @apiSuccess {String} industry  行业.
 * @apiSuccess {String} job  职位.
 * @apiSuccess {String} product  产品/解决方案.
 * @apiSuccess {String} budget  预算.
 * @apiSuccess {String} describe  描述.
 */
router.get('/', (req, res) => {
    Customer.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })

    })
})


module.exports = router