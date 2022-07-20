const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res)=>{
    var page = 'index.html';
    if (req.url != '/'){
        page = req.url+'.html';
    }

    fs.readFile('./' + page, function(err, data){
        var headStatus = 200;
        if (err){
            var headStatus = 404
            data = fs.readFileSync('../404.html')
        }

        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
        res.write(data);
        res.end()
    })
})
server.listen(port, console.log(`Servidor funcionando em: http://localhost:${port}`))
