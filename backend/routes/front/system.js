var express = require('express');
var router = express.Router();
var connection = require('../../config/dbconfig.js');
var moment = require('moment');
router.post('/getDark', (req, res) => { 
  let isDark = false; 
  if (req.body.isDark) { 
    // 用户非第一次进入网站，自行调整过日夜间模式 
  } else { 
    // 自动判断处于日夜间 
    let h = moment().format('H'); 
    if (h >= 8 && h <= 20) { 
      isDark = false; 
    } else { 
      isDark = true; 
    } 
  } 
  res.json({ 
    ret: 200, 
    data: isDark 
  }); 
}); 

module.exports = router;
