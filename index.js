let http = require('http')
let fs = require('fs')
let url = require('url')

http.createServer((req, res) =>{
    let q = url.parse(req.url, true)
    let filename = '.' + q.pathname + '.html'
    if (filename == './.html'){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
          });
    }
    else{
            fs.readFile(filename, (err, data) => {
                    if (err) {
                        fs.readFile('404.html',function(err,data){
                            if (err) throw err;
                            res.writeHead(200,{'Content-Type':'text/html'});
                            res.write(data);
                            return res.end;
                        });
                      } 
        else {res.writeHead(200,
            {'Content-Type': 'text/html'});
            res.write(data)}
    })
    }


}).listen(8080)