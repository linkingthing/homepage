
const mongoose = require('../db')

const company = {
    title: String,
    mainPicture: String,
    content: String,
    date: String,
}

const companySchema = mongoose.Schema(company)

module.exports =  mongoose.model('Company', companySchema); //将schema编译为model构造函数