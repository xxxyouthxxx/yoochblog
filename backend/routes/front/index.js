var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig.js');

router.post('/getNav', (req, res) => { 
  connection.query('SELECT * FROM yooch_cats WHERE pid = 0 AND status = 1 ORDER BY sort ASC', (err, rows) => { 
    if (err) { 
      console.log(err); 
    } else { 
      let data = rows.map(row => { 
        return { 
          id: row.id, 
          name: row.name, 
          path: row.path, 
          icon: row.icon, 
          Introduction: row.Introduction, 
          type: row.type, 
          children: [] 
        }; 
      }); 
      connection.query('SELECT * FROM yooch_cats WHERE pid != 0 AND status = 1 ORDER BY sort ASC', (err, rows) => { 
        if (err) { 
          console.log(err); 
        } else { 
          rows.forEach(row => { 
            let parent = data.find(item => item.id === row.pid); 
            if (parent) { 
              parent.children.push({ 
                id: row.id, 
                name: row.name, 
                path: row.path, 
                icon: row.icon, 
                Introduction: row.Introduction, 
                type: row.type 
              }); 
            } 
          }); 
          res.json({ 
            ret: 200, 
            data: data 
          }); 
        } 
      }); 
    } 
  }); 
}); 

router.post('/getArticle', (req, res) => { 
  let limit = req.body.limit; 
  let path = req.body.path; 
  let defaultLimit = 0; 
  let isBottom = 0; 
  if (limit > 5) { 
    defaultLimit = limit - 5; 
  } 
  let sql = ''; 
  let sqlParams = []; 
  if (path) { 
    sql = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id WHERE a.cat = ? ORDER BY a.id DESC LIMIT ?, ?'; 
    sqlParams = [path, defaultLimit, limit]; 
  } else { 
    sql = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id ORDER BY a.id DESC LIMIT ?, ?'; 
    sqlParams = [defaultLimit, limit]; 
  } 
  connection.query(sql, sqlParams, (err, rows) => { 
    if (err) { 
      console.log(err); 
    } else { 
      let data = rows.map(row => { 
        return { 
          id: row.id, title: row.title, content: row.content, cat: row.cat, cat_name: row.cat_name 
        }; 
      }); 
      let sql2 = ''; 
      let sqlParams2 = []; 
      if (path) { 
        sql2 = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id WHERE a.cat = ? ORDER BY a.id DESC LIMIT ?, ?'; 
        sqlParams2 = [path, defaultLimit, limit + 1]; 
      } else { 
        sql2 = 'SELECT a.*, c.name as cat_name FROM yooch_article a LEFT JOIN yooch_cats c ON a.cat = c.id ORDER BY a.id DESC LIMIT ?, ?'; 
        sqlParams2 = [defaultLimit, limit + 1]; 
      } 
      connection.query(sql2, sqlParams2, (err, rows) => { 
        if (err) { 
          console.log(err); 
        } else { 
          if (rows.length === 6) { 
            isBottom = false; 
          } else { 
            isBottom = true; 
          } res.json({ 
            ret: 200, 
            data: data, 
            count: defaultLimit, 
            isBottom: isBottom }); 
          } 
        }); 
      } 
    }); 
  }); 
module.exports = router;
