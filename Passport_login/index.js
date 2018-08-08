var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
  res.end("hello hai");
});
module.exports = router;
