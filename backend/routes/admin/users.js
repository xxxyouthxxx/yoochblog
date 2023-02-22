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
function getRandomStr() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < 16; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
router.post('/login',function(req,res) {
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
                  ret: 200,
                  msg: '密码正确',
                  data: {
                    token: token,
                    data: data,
                    type:'success'
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

router.post('/list', (req, res) => {
  const param = req.body;
  const page = param.page || 1;
  const where = { is_delect: 0 };
  if (param.status && param.id) {
      where.id = param.id;
     connection.query('UPDATE yooch_users SET status = ? WHERE is_delect = 0 AND id = ?', [param.status, param.id], (err, result) => {
    if (err) throw err;
    res.json({ ret: 200, data: { msg: '修改成功' } });
});
  }
  if (param.username) {
      where.username = param.username;
  }
  connection.query('SELECT COUNT(*) AS total FROM yooch_users WHERE ?', [where], (err, result) => {
      if (err) throw err;
      const total = result[0].total;
      if (total === 0) {
          res.json({ ret: 200, total: 0, data: [] });
      } else {
          connection.query('SELECT id, nickname, username, avatar, status, identity, addtime, lasttime, addip, loginip FROM yooch_users WHERE ? ORDER BY id ASC LIMIT ?, 10', [where, (page - 1) * 10], (err, result) => {
              if (err) throw err;
              res.json({ ret: 200, total, data: result });
          });
      }
  });
});

router.post('/save', (req, res) => {
  const param = req.body;
  if (param.password) {
      param.salt = getRandomStr();
      param.password = get_pasword(param.password, param.salt);
  }
  param.addtime = Math.floor(Date.now()/1000);
  param.addip = '127.0.0.1';
  connection.query('INSERT INTO yooch_users SET ?', param, (err, result) => {
      if (err) throw err;
      res.json({ ret: 200, data: { msg: '添加成功' } });
  });
});
module.exports = router;
