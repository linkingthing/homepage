const express = require('express')
const News = require('../modal/newsModal')

const router = express.Router()


/**
 * @api {Post} /news 创建新闻
 * @apiName PostNews
 * @apiGroup News
 *
 * @apiParam {String} title 标题.
 * @apiParam {String} mainPicture 主图.
 * @apiParam {String} content  内容.
 * @apiParam {String} date  日期.
 * @apiParam {String} type  类型.
 * 
 * @apiSuccess {String} title 标题.
 * @apiSuccess {String} mainPicture 主图.
 * @apiSuccess {String} content  内容.
 * @apiSuccess {String} date  日期.
 * @apiSuccess {String} type  类型.
 */
router.post('/', (req, res) => {
    News.create(req.body).then((data) => {
        console.log(data)
        res.json({
            data: data,
            code: 200,
            message: '创建成功'
        })
    })
})

/**
 * @api {get} /news 请求新闻列表
 * @apiName GetNewsList
 * @apiGroup News
 *
 * @apiParam {Number} current 当前页，默认1.
 * @apiParam {Number} pageSize 分页大小，默认10.
 * @apiParam {String} type 文章类型.
 *
 * @apiSuccess {String} title 标题.
 * @apiSuccess {String} mainPicture 主图.
 * @apiSuccess {String} content  内容.
 * @apiSuccess {String} date  日期.
 * @apiSuccess {String} type  类型.
 */
router.get('/', (req, res) => {
    News.find(req.query).then((data) => {
        res.json({
            data: data,
            code: 200,
            message: ''
        })

    })
})

/**
 * @api {put} /news/:id 更新news信息
 * @apiName PutNewsInfo
 * @apiGroup News
 *
 * @apiParam {Number} id news ID.
 * @apiParam {String} title 标题.
 * @apiParam {String} mainPicture 主图.
 * @apiParam {String} content  内容.
 * @apiParam {String} date  日期.
 * @apiParam {String} type  类型.
 * 
 * @apiSuccess {String} title 标题.
 * @apiSuccess {String} mainPicture 主图.
 * @apiSuccess {String} content  内容.
 * @apiSuccess {String} date  日期.
 * @apiSuccess {String} type  类型.
 */

router.put('/:id', (req, res) => {
    News
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
        }).catch((err) => {
            res.json({
                code: 410,
                message: '更新失败',
                data: null,
                error: err
            })
        })
})

/**
 * @api {delete} /news/:id 删除文章
 * @apiName DeleteNews
 * @apiGroup News
 *
 * @apiParam {Number} id 文章 ID.
 */
router.delete('/:id', (req, res) => {
    News.deleteOne({ _id: req.params.id }).then(() => {
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