
const mongoose = require('../db')

const user = {
    username: String,
    password: String,
}

const userSchema = mongoose.Schema(user)

module.exports = mongoose.model('User', userSchema);