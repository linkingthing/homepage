const express = require('express')
const router = express.Router()

const Banner = require('../modal/bannerModal')

/**
 * @api {Post} /banner 创建Banner
 * @apiName PostBanner
 * @apiGroup Banner
 *
 * @apiParam {String} link 跳转链接.
 * @apiParam {String} img  图片地址.
 * @apiParam {String} position  banner位置.
 * @apiParam {String} address  公司地址.
 * @apiParam {Boolean} active  banner状态.
 * 
 * @apiSuccess {String} link 跳转链接.
 * @apiSuccess {String} img  图片地址.
 * @apiSuccess {String} position  banner位置.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {Boolean} active  banner状态.
 */
router.post('/', (req, res) => {
    Banner.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    }).catch(err => {
        res.json({
            code: 400,
            data: null,
            message: err
        })
    })
})

/**
 * @api {get} /banner/list 请求banner列表
 * @apiName GetBannerList
 * @apiGroup Banner
 *
 * @apiParam {String} position banner位置信息.
 * @apiParam {Boolean} active banner状态.
 *
 * @apiSuccess {String} link 跳转链接.
 * @apiSuccess {String} img  图片地址.
 * @apiSuccess {String} position  banner位置.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {Boolean} active  banner状态.
 */
router.get('/list', (req, res) => {
    Banner.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })

    })
})

/**
 * @api {put} /banner/:id 更新banner信息
 * @apiName PutBannerInfo
 * @apiGroup Banner
 *
 * @apiParam {Number} id banner ID.
 * @apiParam {String} link 跳转链接.
 * @apiParam {String} img  图片地址.
 * @apiParam {String} position  banner位置.
 * @apiParam {String} address  公司地址.
 * @apiParam {Boolean} active  banner状态.
 * 
 * @apiSuccess {String} link 跳转链接.
 * @apiSuccess {String} img  图片地址.
 * @apiSuccess {String} position  banner位置.
 * @apiSuccess {String} address  公司地址.
 * @apiSuccess {Boolean} active  banner状态.
 */

router.put('/:id', (req, res) => {
    Banner
        .findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        })
        .then(data => {
            res.json(
                {
                    data: data,
                    code: 200,
                    message: '更新成功'
                }
            )
        }).catch(() => {
            res.json({
                code: 410,
                message: '更新失败',
                data: null
            })
        })
})

/**
 * @api {delete} /banner/:id 删除banner
 * @apiName DeleteBanner
 * @apiGroup Banner
 *
 * @apiParam {Number} id banner ID.
 */
router.delete('/:id', (req, res) => {
    Banner.deleteOne({_id: req.params.id}).then(() => {
        res.json({
            data: null,
            code: 200,
            message: '删除成功'
        })
    }).catch(err => {
        res.json({
            data: null,
            code: 400,
            message: err
        }) 
    })
})

module.exports = router
