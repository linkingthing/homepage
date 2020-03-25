const mongoose = require('../db')

const banner = {
    img: String,
    link: String,
    position: String,
}

const bannerSchema = mongoose.Schema(banner)

module.exports = mongoose.model('Banner', bannerSchema); 