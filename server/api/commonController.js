const path = require('path')
const fs = require('fs')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()

const uploadFileSchema = require('../modal/uploadFileSchema')
const authMiddleware = require('../middleware/authMiddleware')


/**
 * @api {post} /common/upload 上传文件
 * @apiName UploadFile
 * @apiGroup Common
 *
 * @apiParam {File} file 文件名.
 * 
 * @apiSuccess {String} mimetype  文件类型.
 * @apiSuccess {String} filename  原文件名.
 * @apiSuccess {String} fullpath  文件路径.
 */
router.post('/uploads', authMiddleware)
router.post('/upload', upload.single('file'), (req, res) => {
    const extname = path.extname(req.file.originalname);
    const fullpath = req.file.filename + new Date() * 1 + extname
    fs.rename(req.file.path, req.file.destination + fullpath, (err) => {
        if (err) {
            res.send("重命名错误");
        } else {
            uploadFileSchema.create({
                fullpath: fullpath,
                filename: req.file.originalname,
                mimetype: req.file.mimetype,
            }).then(data => {
                console.log(data)
                res.json({
                    data,
                    message: "文件上传成功"
                });
            }).catch(() => {
                res.json({
                    message: '文件上传失败'
                })
            })
        }
    })
})

/**
 * @api {Get} /common/:fullpath 下载文件
 * @apiName downloadFile
 * @apiGroup Common
 *
 * @apiParam {String} fullpath 文件路径.
 * 
 * @apiSuccess {String} File  文件.
 */
router.get('/:fullpath', (req, res) => {
    res.sendFile(path.resolve('uploads/', req.params.fullpath))
})

module.exports = router