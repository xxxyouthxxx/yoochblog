var express = require('express');
var router = express.Router();
var connection = require('../config/dbconfig')
router.post('/getCommentList', (req, res) => {
    connection.query('SELECT * FROM yooch_remark ORDER BY id DESC', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        connection.query('SELECT * FROM yooch_reply ORDER BY id DESC', (err, data1) => {
            if (err) {
                console.log(err);
                return;
            }
            let remark = [];
            data.forEach(v => {
                connection.query('SELECT title FROM yooch_article', (err, title) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    v.title = title[0].title;
                    console.log(v.title);
                    v.children = [];
                    data1.forEach(x => {
                        connection.query('SELECT article_id FROM yooch_remark WHERE id = ?', [x.remark_id], (err, f_id) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            connection.query('SELECT title FROM yooch_article WHERE id = ?', [f_id[0].article_id], (err, title1) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                if (v.id == x.remark_id) {
                                    x.title = title1[0].title;
                                    v.children.push(x);
                                }
                            });
                        });
                    });
                    remark.push(v);
                });
            });
            res.json({
                ret: 200,
                data: remark
            });
        });
    });
});

module.exports = router;
