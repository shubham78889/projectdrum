const express=require("express");
const app=express();
app.use(express.static("library"));




app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.listen(4021,function(){
    console.log("the server is turned on");
})

    
    
    
    
