// 合作者认证
const mongoose = require('../db')

const cooperate = {
    company: String,
    address: String,
    registeredCapital: String, // 注册资金
    establishTime: String, // 成立时间
    unifiedSocialCreditCode: String, // 统一社会信用代码
    officeAddress: String, // 办公地址
    legalRepresentative: String, // 法人代表
    contacts: String, // 联系人
    phone: String,
    contactPhone: String,
    email: String,
    contactEmail: String,
    IDFrontPicture: String,
    IDBackPicture: String,
    licensePicture: String, // 执照图片
}

const cooperateSchema = mongoose.Schema(cooperate)

module.exports = mongoose.model('CooperateAuth', cooperateSchema);