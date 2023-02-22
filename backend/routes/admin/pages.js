var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig');
router.post('/addPage', (req, res) => {
    let param = req.body;
    param.add_time = Math.floor(Date.now()/1000);
    connection.query('INSERT INTO yooch_pages SET ?', param, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json({
            ret: 200,
            data: '发布成功'
        });
    });
});
router.post('/getPages', (req, res) => {
    connection.query('SELECT * FROM yooch_pages', (err, data) => {
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
router.post('/deletePages', (req, res) => {
    let param = req.body;
    connection.query('DELETE FROM yooch_pages WHERE id = ?', param.id, (err, result) => {
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
module.exports = router;
