const {readFile,writeFile}=require('fs')
var first;
var second;
 readFile('./first.txt','utf-8',(err,result)=>{
     if(err)
     {
         console.log(err)
         return
     }
      first=result
     readFile('./second.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
         second=result
         console.log(second)
         writeFile('./result.txt','hello result',(err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            
         }
         )
     })
     console.log(first)

 })

 