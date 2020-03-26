const express = require('express')
const CooperateAuth = require('../modal/cooperateAuthModal')

const router = express.Router()


/**
 * @api {Post} /cooperate 创建合作者认证
 * @apiName PostCooperateAuth
 * @apiGroup CooperateAuth
 *
 * @apiParam {String} company 公司名.
 * @apiParam {String} address 地址.
 * @apiParam {String} registeredCapital 注册资金.
 * @apiParam {String} establishTime  成立时间.
 * @apiParam {String} unifiedSocialCreditCode  统一社会信用代码.
 * @apiParam {String} officeAddress  办公地址.
 * @apiParam {String} legalRepresentative  法人代表.
 * @apiParam {String} contacts  联系人.
 * @apiParam {String} phone  手机号.
 * @apiParam {String} contactPhone  联系人手机号.
 * @apiParam {String} email  邮箱.
 * @apiParam {String} contactEmail  联系人邮箱.
 * @apiParam {String} IDFrontPicture  身份证正面.
 * @apiParam {String} IDBackPicture  身份证背面.
 * @apiParam {String} licensePicture  营业执照.
 * 
 * @apiSuccess {String} company 公司名.
 * @apiSuccess {String} address 地址.
 * @apiSuccess {String} registeredCapital 注册资金.
 * @apiSuccess {String} establishTime  成立时间.
 * @apiSuccess {String} unifiedSocialCreditCode  统一社会信用代码.
 * @apiSuccess {String} officeAddress  办公地址.
 * @apiSuccess {String} legalRepresentative  法人代表.
 * @apiSuccess {String} contacts  联系人.
 * @apiSuccess {String} phone  手机号.
 * @apiSuccess {String} contactPhone  联系人手机号.
 * @apiSuccess {String} email  邮箱.
 * @apiSuccess {String} contactEmail  联系人邮箱.
 * @apiSuccess {String} IDFrontPicture  身份证正面.
 * @apiSuccess {String} IDBackPicture  身份证背面.
 * @apiSuccess {String} licensePicture  营业执照.
 */
router.post('/', (req, res) => {
    CooperateAuth.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    })
})

/**
 * @api {get} /cooperate 请求合作者认证列表
 * @apiName GetCooperateAuth
 * @apiGroup CooperateAuth
 *
 * @apiSuccess {String} company 公司名.
 * @apiSuccess {String} address 地址.
 * @apiSuccess {String} registeredCapital 注册资金.
 * @apiSuccess {String} establishTime  成立时间.
 * @apiSuccess {String} unifiedSocialCreditCode  统一社会信用代码.
 * @apiSuccess {String} officeAddress  办公地址.
 * @apiSuccess {String} legalRepresentative  法人代表.
 * @apiSuccess {String} contacts  联系人.
 * @apiSuccess {String} phone  手机号.
 * @apiSuccess {String} contactPhone  联系人手机号.
 * @apiSuccess {String} email  邮箱.
 * @apiSuccess {String} contactEmail  联系人邮箱.
 * @apiSuccess {String} IDFrontPicture  身份证正面.
 * @apiSuccess {String} IDBackPicture  身份证背面.
 * @apiSuccess {String} licensePicture  营业执照.
 */
router.get('/', (req, res) => {
    CooperateAuth.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })

    })
})


module.exports = router