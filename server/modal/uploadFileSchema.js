const mongoose = require('../db')

const uploadFile = {
    fullpath: String,
    filename: String,
    mimetype: String,
}

const uploadFileSchema = mongoose.Schema(uploadFile)

module.exports = mongoose.model('UploadFile', uploadFileSchema); 