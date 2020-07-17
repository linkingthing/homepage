/* 
  mongoose.js ：建立数据库连接
 */
const mongoose = require('mongoose') // 引入 mongoose
const url = "mongodb://101.201.124.157:27017/homePage"; // 本地数据库地址
mongoose.connect(url, { useFindAndModify: false })

// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Successful connection to " + url)
});

module.exports = mongoose
