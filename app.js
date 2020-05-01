const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/gallery",function(req,res){
  res.sendFile(__dirname + "/Gallery.html");
});
app.get("/contact",function(req,res){
  res.sendFile(__dirname + "/Contact.html");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("server is running at port 3000");
})
