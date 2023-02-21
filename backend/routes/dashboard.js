var express = require('express');
var router = express.Router();
var connection = require('../config/dbconfig')
/* GET home page. */
router.post('/getInfo', (req, res) => {
    let article = 0;
    let views_count = 0;
    let comment = 0;
    let like = 0;
    let sql1 = `SELECT COUNT(*) AS article FROM yooch_article`;
    let sql2 = `SELECT views FROM yooch_article`;
    let sql3 = `SELECT COUNT(*) AS remark FROM yooch_remark`;
    let sql4 = `SELECT COUNT(*) AS reply FROM yooch_reply`;
    let sql5 = `SELECT COUNT(*) AS like_log FROM yooch_like_log`;
    connection.query(sql1, (err, result) => {
        if (err) throw err;
        article = result[0].article;
    });
    connection.query(sql2, (err, result) => {
        if (err) throw err;
        result.forEach(v => {
            views_count += v.views;
        });
    });
    connection.query(sql3, (err, result) => {
        if (err) throw err;
        remark = result[0].remark;
    });
    connection.query(sql4, (err, result) => {
        if (err) throw err;
        reply = result[0].reply;
    });
    connection.query(sql5, (err, result) => {
        if (err) throw err;
        like = result[0].like_log;
        res.json({
            ret: 200,
            data: {
                article: article,
                views: views_count,
                comment: comment,
                like: like
            }
        });
    });
});
router.post('/articleRank', (req, res, next) => {
    let sql = 'SELECT * FROM yooch_article WHERE WEEK(add_time) = WEEK(NOW())'
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(200).json({
                ret: 200,
                data: rows,
                error: err
            });
        }
        let array = [0, 0, 0, 0, 0, 0, 0]
        let weeks = []
        rows.forEach(v => {
            let weekArray = [0, 1, 2, 3, 4, 5, 6]
            let oneD = 24 * 60 * 60
            let week = weekArray[date("w", v.add_time + oneD * 0)]
            v.week = week
            weeks.push(v.week)
            let arr = array_count_values(weeks)
            switch (v.week) {
                case 1:
                    array[1] = arr[1]
                    break
                case 2:
                    array[2] = arr[2]
                    break
                case 3:
                    array[3] = arr[3]
                    break
                case 4:
                    array[4] = arr[4]
                    break
                case 5:
                    array[5] = arr[5]
                    break
                case 6:
                    array[6] = arr[6]
                    break
                case 0:
                    array[0] = arr[0]
                    break
            }
        })
        return res.status(200).json({
            ret: 200,
            data: array
        })
    })
})
router.post('/trafficRank', (req, res, next) => {
    let sql = 'SELECT * FROM yooch_article ORDER BY views DESC LIMIT 0, 5'
    connection.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(200).json({
                ret: 200,
                data: rows,
                error: err
            });
        }
        return res.status(200).json({
            ret: 200,
            data: rows
        })
    })
})
module.exports = router;
