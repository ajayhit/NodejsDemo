 var express=require('express')

 var app=express()
 app.get("/",function(req,res){      
     res.send("hello")
 })

 app.get("/Test",function(req,res){
    const name=req.query.name;
    res.send(name)   
})

 app.get("/Test/:id",function(req,res){
      const id=req.params.id;
    res.send(id)   
})

 app.listen(5500)