const express = require('express')
const Company = require('../modal/companyModal')

const router = express.Router()

/**
 * @api {get} /company/info 请求公司信息
 * @apiName GetCompanyInfo
 * @apiGroup Company
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} tel 公司电话号码.
 * @apiSuccess {String} fax  传真.
 * @apiSuccess {String} email  公司邮箱.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {String} qcode  qcode（微信）.
 * @apiSuccess {String} about  关于公司.
 */
router.get('/info', (req, res) => {
    Company.findOne({}).then(data => {
        res.json(data || {})
    })
})


/**
 * @api {post} /company/info 创建公司信息
 * @apiName PostCompanyInfo
 * @apiGroup Company
 *
 * @apiParam {String} tel 公司电话号码.
 * @apiParam {String} fax  传真.
 * @apiParam {String} email  公司邮箱.
 * @apiParam {String} address  公司地址.
 * @apiParam {String} qcode  qcode（微信）.
 * @apiParam {String} about  关于公司.
 * 
 * @apiSuccess {String} tel 公司电话号码.
 * @apiSuccess {String} fax  传真.
 * @apiSuccess {String} email  公司邮箱.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {String} qcode  qcode（微信）.
 * @apiSuccess {String} about  关于公司.
 */
router.post('/info', (req, res) => {
    Company.findOne({}).then(data => {
        console.log(data)
        if (data) {
            res.json({
                data: data,
                code: 415,
                message: '已经存在公司信息，请勿重复创建'
            })
            throw '重复创建'
        }
    }).then(() => {
        Company.create(req.body).then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
})


/**
 * @api {put} /company/info/:id 更新公司信息
 * @apiName PutCompanyInfo
 * @apiGroup Company
 *
 * @apiParam {Number} id 公司 ID.
 * @apiParam {String} tel 公司电话号码.
 * @apiParam {String} fax  传真.
 * @apiParam {String} email  公司邮箱.
 * @apiParam {String} address  公司地址.
 * @apiParam {String} qcode  qcode（微信）.
 * @apiParam {String} about  关于公司.
 * 
 * @apiSuccess {String} tel 公司电话号码.
 * @apiSuccess {String} fax  传真.
 * @apiSuccess {String} email  公司邮箱.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {String} qcode  qcode（微信）.
 * @apiSuccess {String} about  关于公司.
 */

router.put('/info/:id', (req, res) => {
    Company
        .findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        })
        .then(data => {
            res.json(
                data
            )
        }).catch(() => {
            res.json({
                message: '更新失败'
            })
        })
})

module.exports = router
