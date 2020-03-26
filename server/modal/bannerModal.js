const mongoose = require('../db');

const banner = {
    img: {
        type: String,
        required: [true, '请填写banner图片路径']
    },
    link: String,
    position: String,
    active: {
        type: Boolean,
        default: true
    }
}

const bannerSchema = mongoose.Schema(banner);

module.exports = mongoose.model('Banner', bannerSchema); 