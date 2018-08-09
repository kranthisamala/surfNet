var express = require('express');
var app = express();
var login = require('./Passport_login/')
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.use('/login',login);
app.get("/",(req,res)=>{
  res.send("hello hi bye bye");
})


app.listen(port,() => {
  console.log(`server running at port ${port}`);
});
