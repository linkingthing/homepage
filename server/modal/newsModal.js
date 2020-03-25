
const mongoose = require('../db')

const anew = {
    title: String,
    mainPicture: String,
    content: String,
    date: String,
    type: String
}

const newsSchema = mongoose.Schema(anew)

module.exports = mongoose.model('News', newsSchema); //将schema编译为model构造函数