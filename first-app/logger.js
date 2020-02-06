var url = 'http://mylogger.io/log'

function log(message) {
    //send HTTP request
    console.log(message)
}

module.exports = log;

//you can export a single function or an object 