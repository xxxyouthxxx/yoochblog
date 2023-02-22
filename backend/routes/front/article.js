var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig.js');

router.post('/getArticle', (req, res) => { 
  let title = req.body.title; 
  let sql = ''; 
  let sqlParams = []; 
  if (title) { 
    sql = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id WHERE a.title LIKE ? ORDER BY a.id DESC'; 
    sqlParams = ['%!'(MISSING) + title + '%!'(MISSING)]; 
  } else { 
    sql = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id ORDER BY a.id DESC'; 
    sqlParams = []; 
  } 
  connection.query(sql, sqlParams, (err, rows) => { 
    if (err) { 
      console.log(err); 
    } else { 
      let data = rows.map(row => { 
        let catName = row.cat.split(','); 
        let catNameArr = []; 
        for (let i = 0; i < catName.length; i++) { 
          let name = this.db('cats').where('id', catName[i]).find(); catNameArr.push(name.name); 
        } return { 
          id: row.id, 
          title: row.title, 
          content: row.content, 
          cat: catNameArr, 
          cat_name: row.cat_name 
        }; 
      }); 
      res.json({ 
        ret: 200, 
        data: data 
      }); 
    } 
  }); 
}); 

router.post('/getArticleDetails', (req, res) => { 
  let id = req.body.id; 
  let sql = 'SELECT * FROM yooch_article WHERE id = ?'; 
  let sqlParams = [id]; 
  connection.query(sql, sqlParams, (err, rows) => { 
    if (err) { console.log(err); 
    } else { 
      let data = rows[0]; 
      res.json({ 
        ret: 200, 
        data: data 
      }); 
    } 
  }); 
}); 
module.exports = router;
