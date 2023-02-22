var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig')
/* GET home page. */
router.post('/cats', (req, res) => {
    let param = req.body;
    if (param.status && param.id) {
        let sql = `UPDATE cats SET status = ? WHERE id = ?`;
        let data = [param.status, param.id];
        connection.query(sql, data, (err, result) => {
            if (err) throw err;
            res.json({
                ret: 200,
                data: '修改成功'
            });
        });
    }
    if (param.name) {
        let sql = `SELECT * FROM cats WHERE name = ? ORDER BY sort ASC`;
        let data = [param.name];
        connection.query(sql, data, (err, result) => {
            if (err) throw err;
            res.json({
                ret: 200,
                data: result
            });
        });
    }
    let sql = `SELECT id, pid, name, icon, path, status, sort, Introduction, type, addtime FROM yooch_cats WHERE pid = 0 ORDER BY sort ASC`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            let sql = `SELECT id, pid, name, icon, path, status, sort, Introduction, type, addtime FROM yooch_cats WHERE pid = ? ORDER BY sort ASC`;
            let data = [result[i].id];
            connection.query(sql, data, (err, children) => {
                if (err) throw err;
                result[i].children = children;
            });
        }
        res.json({
            ret: 200,
            data: result
        });
    });
});
router.post('/getCats', function(req, res, next) {
    connection.query('SELECT id,name FROM yooch_cats WHERE pid = 0 AND type = 1 ORDER BY sort asc', (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: err
            });
        }
        for (let i = 0; i < rows.length; i++) {
            connection.query('SELECT id,name FROM yooch_cats WHERE pid = ? AND type = 1 ORDER BY sort asc', [rows[i].id], (err, rows2) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        error: err
                    });
                }
                rows[i].children = rows2;
            })
        }
        return res.status(200).json({
            ret: 200,
            data: rows
        })
    })
})
router.post('/addArticle', (req, res, next) => {
    const params = req.body;
    if (params.isEdit) {
        const data = {
            update_time: Math.floor(Date.now() / 1000),
            title: params.title,
            content: params.content,
            value: params.value,
            cat: params.catId
        }
        if (params.top_pic) {
            data.top_pic = params.top_pic
        }
        connection.query('UPDATE yooch_article SET ? WHERE id = ?', [data, params.id], (err, rows) => {
            if (err) {
                res.json({ret: 500, data: '更新失败'});
            } else {
                res.json({ret: 200, data: '更新成功'});
            }
        })
    } else {
        const data = {
            add_time: Math.floor(Date.now() / 1000),
            title: params.title,
            content: params.content,
            value: params.value,
            cat: params.catId
        }
        if (params.top_pic) {
            data.top_pic = params.top_pic
        }
        connection.query('INSERT INTO yooch_article SET ?', data, (err, rows) => {
            if (err) {
                res.json({ret: 500, data: '添加失败'});
            } else {
                res.json({ret: 200, data: '添加成功'});
            }
        })
    }
})
router.post('/getArticle', (req, res, next) => {
    let param = req.body
    let sql = 'SELECT * FROM yooch_article '
    let data = []
    if (param.title) {
        sql += 'WHERE title LIKE ? '
        data.push('%!'(MISSING) + param.title + '%!'(MISSING))
    }
    sql += ' ORDER BY id DESC'
    connection.query(sql, data, (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(200).json({
                ret: 200,
                data: rows,
                error: err
            });
        }
        let cats = []
        rows.forEach(item => {
            cats = item.cat.split(',')
            cats.forEach((cat, index) => {
                let sql = 'SELECT name FROM yooch_cats WHERE id = ?'
                connection.query(sql, [cat], (err, rows2) => {
                    if (err) {
                        console.log(err);
                        return res.status(200).json({
                            ret: 200,
                            data: rows,
                            error: err
                        });
                    }
                    cats[index] = rows2[0].name
                })
            })
            item.cat = cats
        });
        return res.status(200).json({
            ret: 200,
            data: rows
        })
    })
})
router.post('/deleteArticle', (req, res, next) => {
    let param = req.body
    let sql = 'DELETE FROM yooch_article WHERE id = ?'
    connection.query(sql, [param.id], (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(200).json({
                ret: 200,
                data: {
                    msg: '删除失败'
                },
                error: err
            });
        }
        return res.status(200).json({
            ret: 200,
            data: {
                msg: '删除成功'
            }
        })
    })
})

router.post('/getArticleDetails', (req, res) => {
    let param = req.body;
    let sql = `SELECT * FROM yooch_article WHERE id = ${param.id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json({
            ret: 200,
            data: result[0]
        });
    });
});
module.exports = router;
