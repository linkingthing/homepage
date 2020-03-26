const phoneReg = /^1\d{10}&/
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const usernameReg = /^[\u4e00-\u9fa5]{2,5}$/
const newsTitleReg = /^[\s\S]{1,20}$/


module.exports = {
    phoneReg,
    emailReg,
    usernameReg,
    newsTitleReg
}