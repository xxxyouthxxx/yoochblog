var express = require('express');
const connection = require('../../config/dbconfig');
var router = express.Router();
/* GET home page. */

// menu
router.post('/menu', (req, res) => {
  const param = req.body;
  if (param.status && param.id) {
      const where = { id: param.id };
      connection.query('UPDATE yooch_menu SET status = ? WHERE ?', [param.status, where], (err, result) => {
          if (err) throw err;
          res.json({ ret: 200, data: '修改成功' });
      });
  } else if (param.title) {
      const where = { title: param.title };
      connection.query('SELECT * FROM yooch_menu WHERE ? ORDER BY sort ASC', [where], (err, result) => {
          if (err) throw err;
          res.json({ ret: 200, data: result });
      });
  }else if (param.key == 'route') {
      connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = 0 AND status = 1 ORDER BY sort ASC', (err, result) => {
          if (err) throw err;
          const data = result;
          for (let i = 0; i < data.length; i++) {
              connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = ? AND status = 1 ORDER BY sort ASC', [data[i].id], (err, result) => {
                  if (err) throw err;
                  data[i].children = result;
                  if (i == data.length - 1) {
                      res.json({ ret: 200, data: data });
                  }
              });
          }
      });
  } else {
      connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = 0 ORDER BY sort ASC', (err, result) => {
          if (err) throw err;
          const data = result;
          for (let i = 0; i < data.length; i++) {
              connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = ? ORDER BY sort ASC', [data[i].id], (err, result) => {
                  if (err) throw err;
                  data[i].children = result;
                  console.log(result)
                  if (i == data.length - 1) {
                      res.json({ ret: 200, data: data });
                  }
              });
          }
      });
  }
});
router.post('/getSystem' , function(req, res, next) {
  connection.query('SELECT * FROM yooch_system', (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        error: err
      })
    } 
    return res.status(200).json({
        ret:200,
        data: result
    })
  }
)
})
router.post('/siteSave', (req, res) => {
  let param = req.body;
  let sql = `SELECT * FROM yooch_system`;
  connection.query(sql, (err, system) => {
      if (err) throw err;
      for (let i = 0; i < system.length; i++) {
          if (param[system[i].key]) {
              let sql = 'UPDATE yooch_system SET value = ? WHERE `key` = ?';
              let data = [param[system[i].key], system[i].key];
             connection.query(sql, data, (err, result) => {
                  if (err) {
                    console.log(err.message);
                  }
              });
          }
      }
      res.json({
          ret: 200,
          data: {
              msg: '保存成功'
          }
      });
  });
});
router.post('/loginlog', (req, res) => {
  const param = req.body;
  let where;
  if (param.user_name) {
      where = { user_name: param.user_name };
  } else {
      where = {};
  }
  connection.query('SELECT * FROM yooch_login_log `WHERE` ?', [where], (err, result) => {
      if (err) throw err;
      res.json({ ret: 200, data: result });
  });
});
module.exports = router;
