
const mongoose = require('../db')
const regExp = require('../utils/regExp')

const company = {
    tel: String,
    fax: String,
    email: String,
    address: Array,
    qcode: String,
    about: String,
}

const companySchema = mongoose.Schema(company);

module.exports =  mongoose.model('Company', companySchema); //将schema编译为model构造函数