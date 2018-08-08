var express = require('express');
var app = express();
var login = require('./Passport_login/')
app.use(express.static('public'))
app.use('/login',login);
app.get("/",(req,res)=>{
  res.send("hello hi bye bye");
})


app.listen(3000,() => {
  console.log("server running at port 3000");
});
