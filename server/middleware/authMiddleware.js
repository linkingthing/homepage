module.exports = function auth(req, res, next) {
    if (req.session.username) {
        next()
    } else {
        res.json({
            data: null,
            code: 401,
            message: '请登录后访问'
        })
    }
}