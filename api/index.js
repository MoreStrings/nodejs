const http = require("http")

const server = http.createServer((req, res) => {
    console.log("req: ", req)
    const {url, method} = req
    console.log("url: ", url)
    console.log("medhod: ", method)
    if(url == "/"){
        res.end("REsponse from end point /")
    }
    if(url == "/test"){
        res.end("holla")
    }
})

server.listen(3000, (err) => {
    if (err){
        console.log("Error: ", err)
    }else{
        console.log("Server is listening to port 3000.")
    }
})