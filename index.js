const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req.url);

    const pathName = req.url;

  
    if(pathName === '/' || pathName === '/overview') {
        res.end('this is the overview');
    } else if (pathName === '/product') {
        res.end('this is the product')
    }

    else if (pathName === '/api') {
        res.end('API');

    }
    else {
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-content-type': 'hellow world'
        });
        res.end('<h1>page not found</h1>');
    }
    // res.end('hellow from the server');
});

server.listen(8000,'127.0.0.1', () => {
    console.log('listening to requests on port 8000');
})