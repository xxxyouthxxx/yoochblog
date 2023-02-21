var mysql = require('mysql')
// 创建mysql连接
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'73156',
	database: 'yoochblog'
})
module.exports = connection