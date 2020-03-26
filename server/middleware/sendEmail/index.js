const nodemailer = require('nodemailer');
const config = require('../../config')

let transporter = nodemailer.createTransport({
    service: config.emailHost,
    port: 465, // SMTP 端口
    secureConnection: true, // open SSL
    auth: {
        user: config.senderEmail,
        pass: config.senderCode,
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log(success, "Server is ready to take our messages");
    }
});


module.exports = function sendEmail(req, res, next) {

    const html = render(req.body)
    console.log(html)

    let mailOptions = {
        from: config.senderEmail,
        to: config.receiveEmail.join(','),
        subject: '【连星科技官网信息】',
        html: html
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    next()
}


function render(data) {
    console.log(data)
    let result = '<div><ul>'
    for (const key in data) {
        console.log(key)
        const li = `<li>${key}:${data[key]}</li>`
        result += li
    }
    result += '</ul></div>'
    return result
}