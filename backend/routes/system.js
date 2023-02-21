var express = require('express');
const connection = require('../config/dbconfig');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// menu
router.post('/menu', (req, res) => {
    const { status, id, title, key } = req.body;
    let data;
    let where = {};
    if (status && id) {
      where.id = id;
      connection.query('UPDATE yooch_menu SET status = ? WHERE id = ?', [status, id], (err, rows) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        }
        return res.status(200).json({
          ret: 200,
          data: '修改成功'
        });
      });
    } else if (title) {
      where.title = title;
      connection.query('SELECT * FROM menu WHERE title = ? ORDER BY sort ASC', [title], (err, rows) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        }
        return res.status(200).json({
          ret: 200,
          data: rows
        });
      });
    } else if (key === 'route') {
      connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = 0 AND status = 1 ORDER BY sort ASC', (err, rows) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        }
        data = rows;
        for (let i = 0; i < data.length; i++) {
          connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM yooch_menu WHERE pid = ? AND status = 1 ORDER BY sort ASC', [data[i].id], (err, rows) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                error: err
              });
            }
            data[i].children = rows;
            if (i === data.length - 1) {
              return res.status(200).json({
                ret: 200,
                data: data
              });
            }
          });
        }
      });
    } else {
      connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM menu WHERE pid = 0 ORDER BY sort ASC', (err, rows) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        }
        data = rows;
        for (let i = 0; i < data.length; i++) {
          connection.query('SELECT id, pid, title, icon, path, status, sort, create_time FROM menu WHERE pid = ? ORDER BY sort ASC', [data[i].id], (err, rows) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                error: err
              });
            }
            data[i].children = rows;
            if (i === data.length - 1) {
              return res.status(200).json({
                ret: 200,
                data: data
              });
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
module.exports = router;
