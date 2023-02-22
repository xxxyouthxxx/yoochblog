var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig.js');

router.post('/getComment', (req, res) => { 
  let id = req.body.id; 
  let sql = `SELECT * FROM yooch_remark WHERE article_id = ${id} ORDER BY id ASC; SELECT * FROM yooch_reply ORDER BY id ASC;`; 
  connection.query(sql, (err, results) => { 
    if (err) { 
      console.log(err); 
    } else { 
      let remark = []; 
      let count = 0; 
      results[0].forEach(v => { 
        v.children = []; 
        results[1].forEach(x => { 
          if (v.id == x.remark_id) { 
            v.children.push(x); count++; 
          } 
        }); 
        remark.push(v); 
      }); 
      count = results[0].length + count; 
      res.json({ 
        ret: 200, 
        data: remark, 
        count: count 
      }); 
    } 
  }); 
}); 

module.exports = router;
