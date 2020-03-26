// 白皮书下载者
const mongoose = require('../db')

const whiteBook = {
    cname: String,
    email: String,
    phone: String,
    company: String,
}

const whiteBookSchema = mongoose.Schema(whiteBook)

module.exports = mongoose.model('WhiteBook', whiteBookSchema);