
const mongoose = require('../db')

const guestbook = {
    cname: String,
    email: String,
    message: String,
}

const guestbookSchema = mongoose.Schema(guestbook)

module.exports = mongoose.model('Guestbook', guestbookSchema);