var express = require('express');
var mysql = require('mysql')
var crypto = require('crypto')
var jwt = require('jsonwebtoken');
var connection = require('../../config/dbconfig')
var router = express.Router();
// 定义get_pasword方法
function get_pasword(password,  encrypt = '') {
  const pwd = {}
  pwd.encrypt = encrypt ? encrypt : crypto.randomBytes(16).toString('hex')
  pwd.password = crypto.createHash('md5').update(`${password}${pwd.encrypt}`).digest('hex')
  return encrypt ? pwd.password : pwd
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.post('/users/login',function(req,res) {
  let param = req.body;
  let where = {
    is_delect: 0,
  }
  if (param) {
    if (param.username) {
      where.username = param.username
    }
    // 查询用户信息
    connection.query('SELECT * FROM yooch_users WHERE `is_delect` = 0 OR `username` = ?', 'admin', (err, result)  => {
      if (err) {
        console.log(err);
      } else {
        let data = result[0];
        if (data) {
        // 校验密码
          if (data.password === get_pasword(param.password, data.salt)) {
            // 生成token
            let token = jwt.sign({data: data.id}, 'secret', {expiresIn: '3m'});
            // 记录登录日志
            connection.query('INSERT INTO yooch_login_log SET ?', {
              user_name: data.username,
              create_time: Math.floor(Date.now() / 1000),
              login_ip: '127.0.0.1'
            }, (err, result) => {
              if (err) {
                console.log(err)
              } else {
                res.json({
                  code: 200,
                  msg: '密码正确',
                  data: {
                    token: token,
                    data: data,
                    type:'success',
                  }
                })
              }
            })
          } else {
            res.json({
              ret: 400,
              data:{
                type:'error',
                info:'登录密码错误'
              }
            })
          } 
        } else {
          res.json({
            ret:200,
            data:{
              type:'error',
              info:'用户不存在'
            }
          })
        }
      }
    })
  } else {
    res.json({
      ret: 401,
      data:'请登录'
    })
  }
})


module.exports = router;
