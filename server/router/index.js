var express = require('express'); // 라이브러리 첨부
var router = express.Router();
router.get('/',function(res,req){
  res.send({type : "entp", id : "0", count : "20"});
});

module.exports = router;

