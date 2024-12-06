
//wrapper function
// function(__dirname, __filename) {

const { Server } = require('http');

    console.log(__dirname);
    console.log(__filename);

    const add = reguire('./calculator.js');
    console.log(add(2,3)); 

    require('http');

    const server = http.createServer(function(req,res){
        res.writeHead(200);
        res.end('Hello, World!');
    });

    server.lister(8080);
//}




