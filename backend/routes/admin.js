var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.post('/users/login',function(req,res) {
  return res.status(200).json({
    ret: 1,
    info: "登陆成功",
    token,
    data: u,
});
})
// const login = function(req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   const db = req.app.db;
//   const getUser = db.select().from("users");
//   const user = getUser.where("username", username);
//   if (user.count() == 0) {
//       return res.status(404).json({
//           ret: 0,
//           info: "用户不存在",
//       });
//   }
//   const u = user.first();
//   if (u.password === getPassword(password, u.salt)) {
//       const token = generateToken(u.id);
//       db.insert("login_log").values([username, Date.now(), '127.0.0.1']).exec();
//       return res.status(200).json({
//           ret: 1,
//           info: "登陆成功",
//           token,
//           data: u,
//       });
//   }
//   return res.status(404).json({
//       ret: 0,
//       info: "密码错误",
//   });
// };
// function getPassword(password, salt) {
//   const salt1 = (salt || '').split('');
//   const salt2 = (password || '').split('');
//   return salt1[0] + salt2[0] + salt1[1] + salt2[1] + salt1[2] + salt2[2];
// }
// function generateToken(id) {
//   const randNum = Math.random().toString(36).substr(2);
//   return `${id}${Date.now()}${randNum}`;
// }
module.exports = router;
