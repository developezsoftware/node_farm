const fs = require('fs');
const http = require('http');
const url = require('url');

//Get initial JSON data from dev-data
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

//Server and Routing
const server = http.createServer( (req, res) => {
    const pathName = req.url;
    if(pathName == '/' || pathName == '/overview')
    {
        res.end("This is the overview");
    } else if(pathName == '/product') {
        res.end("This is the product page");
    } else if(pathName == '/api'){
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(data);
    } else {
    res.writeHead(404, {
        'Content-type' : 'html'
    });
    res.end('<h1>Page not found!</h1>');
    }
    
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});