const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    const {url, method} = request;
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
                response.end('500, 服务器错误');
                return ;
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        });
    } else if (url === '/users' && method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify([{name:'tom',age:20}]));
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('404, 页面没有找到');
    }
        
})

function getProperTypeChain(obj) {
    var protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    protoChain.push(null);
    return protoChain;
}

server.listen(3000)