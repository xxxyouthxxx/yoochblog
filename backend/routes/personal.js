var express = require('express');
var router = express.Router();
var connection = require('../config/dbconfig')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/getInfo' , function(req, res, next) {
    connection.query('SELECT * FROM yooch_info ', (err, rows) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: err
            });
        }
        let data = rows[0];
        return res.status(200).json({
            ret: 200,
            data: data
        });
    })
})

module.exports = router;