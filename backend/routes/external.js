var express = require('express');
var router = express.Router();
var connection = require('../config/dbconfig');

router.post('/hitokoto', (req, res) => { 
  connection.query('SELECT * FROM yochhitokoto', (err, rows) => {
     if (err) { 
      console.log(err); 
    } else { 
      res.json(rows); 
    }
   }); 
  });

router.post('/getInfo', (req, res) => {
  let sql = 'SELECT COUNT(*) AS articleCount FROM yooch_article; SELECT COUNT(*) AS commentCount FROM yooch_remark UNION ALL SELECT COUNT(*) FROM yooch_reply;';
  connection.query(sql, (err, results) => {
      if (err) {
          console.log(err);
          return;
      }
      let articleCount = results[0][0].articleCount;
      let commentCount = results[1][0].commentCount;
      res.json({
          ret: 200,
          data: {
              articleCount,
              commentCount
          }
      });
  });
});

module.exports = router;
