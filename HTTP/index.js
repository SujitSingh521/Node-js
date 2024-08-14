const http =require("http");
const fs =require("fs");

const server = http.createServer((req, res) =>{

    if (req.url === "/"){
        res.end("Home Page");

    } else if (req.url === "/about"){
        res.end("About Page");

    } else if (req.url === "/user"){
        fs.readFile(". /db. json", "utf8", (err, data) => {

            if (err){
                res.end("Data Are Not Found");
            } else {
                const db = JSON.parse(data);
                res.end(JSON.stringify(db.user));
            }

        });

    } else if (req.url === "/getproductdata") {

        fs.readFile(". /db. json", "utf8", (err, data) => {
            if (err){
                res.end("Data Not Found");

            } else {
                const db = JSON.parse(data);

                res.end(JSON.stringify(ds.products));
            }

        });

    } else {
        res.end("404 Not Found");
    }

});

server.listen(5000, ()=>{
    console.log("Server Started at Port = 5000");

});