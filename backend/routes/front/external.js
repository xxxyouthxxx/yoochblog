var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig.js');
var request = require('request');

router.post('/getMusic', (req, res) => { 
  let id = req.body.id; 
  let url = 'http://api.uomg.com/api/rand.music?mid=' + id + '&format=json'; 
  request(url, (err, response, body) => { 
    if (err) { console.log(err); 
    } else { 
      let data = JSON.parse(body); 
      res.json({ 
        ret: 200, 
        data: data 
      }); 
    } 
  }); 
}); 

router.post('/getPoetry', (req, res) => { 
  let url = 'https://v1.jinrishici.com/all'; 
  request(url, (err, response, body) => { 
    if (err) { 
      console.log(err); 
    } else { 
      let data = JSON.parse(body); 
      res.json({ 
        ret: 200, 
        data: data 
      }); 
    } 
  }); 
}); 

module.exports = router;
