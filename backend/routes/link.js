var express = require('express');
var router = express.Router();
var connection = require('../config/dbconfig');

router.post('/getLink', (req, res) => {
    let param = req.body;
    let query = 'SELECT * FROM yooch_links';
    if (param.id) {
        query += ' WHERE id = ?';
    }
    connection.query(query, param.id, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            ret: 200,
            data: data
        });
    });
});
router.post('/addLink', (req, res) => {
    let param = req.body;
    console.log(param);
    param.add_time = Math.floor(Date.now()/1000);
    let query = 'INSERT INTO yooch_links SET ?';
    if (param.id) {
        query = 'UPDATE yooch_links SET ? WHERE id = ?';
    }
    connection.query(query, [param, param.id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        let message = '添加成功';
        if (param.id) {
            message = '修改成功';
        }
        res.json({
            ret: 200,
            data: message
        });
    });
});
router.post('/deleteLink', (req, res) => {
    let param = req.body;
    connection.query('DELETE FROM yooch_links WHERE id = ?', param.id, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            ret: 200,
            data: '删除成功'
        });
    });
});
router.post('/changeStatus', (req, res) => {
    let param = req.body;
    connection.query('UPDATE yooch_links SET ? WHERE id = ?', [param, param.id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            ret: 200,
            data: '修改成功'
        });
    });
});
module.exports = router;
