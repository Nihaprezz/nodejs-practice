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



