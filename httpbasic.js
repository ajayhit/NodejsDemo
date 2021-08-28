var http=require('http')

const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
    res.end("this is my first app")
    }
   else if(req.url==="/about")
    {
        res.end("this is my about app")
    }

    res.end(`<h1>opppsss</h1>
    <p>this page not found</p>
    <a href="/">Go back to home</a>
    `)
})

server.listen(5000)