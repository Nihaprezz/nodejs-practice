let log = require('./logger')

//PATH 
const path = require('path')
var pathObject = path.parse(__filename)

//OS
const os = require('os');
var totalMemory = os.totalmem()
var freeMemory = os.freemem()
console.log(totalMemory)
console.log(freeMemory)


//FILE SYSTEM
const fs = require('fs');

//Creating a quick server. 
const http = require('http')  // require the http module
const hostname = `127.0.0.1`
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, hostname, () => {
    console.log(`Server is running at https://${hostname}:${port}`)
})



