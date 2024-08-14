const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("this is home page")
    }else if(req.url=="/about"){
        res.end("this is about page")
    }else if(req.url=="/user"){
        fs.readFile("./db.json","utf8",(err,data)=>{
            if(err){
                res.end("404 error")
            }else{
                const productData=JSON.parse(data)
                res.end(JSON.stringify(productData.user))
            }
        })
    }else if(req.url=="/getproductdata"){
        fs.readFile("./db.json","utf8",(err,data)=>{
            if(err){
                res.end("data not found")
            }else{
                const productData=JSON.parse(data)
                res.end(JSON.stringify(productData.product))
            }
        })
    }
})

server.listen(8080,()=>{
    console.log("server is running on port 8080")
})