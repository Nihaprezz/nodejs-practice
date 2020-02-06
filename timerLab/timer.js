var argv = process.argv //argv is short for argument values. using process will print out an array of the processes
var timeLeft = 0;

if (!argv[2]){
    console.log('Please provide an argument, e.g., 5s or 1min. ')
    process.exit(1)
} else if (argv[2].indexOf('s') > -1){
    timeLeft = parseInt(argv[2].slice(0, -1), 10)
    console.log(timeLeft, ' Seconds')
} else if (argv[2].indexOf('min') > -1){
    timeLeft = parseInt(argv[2].slice(0, -3), 10) * 60 
    console.log(timeLeft, ' Seconds')
} else {
    console.log('Please provide an argument, e.g., 5s or 1min. ')
    process.exit(1)
}

let interval = setInterval(() => {
    timeLeft--
    console.log(`Time Left: ${timeLeft}s`)
    if (timeLeft == 0){
        clearInterval(interval)
        process.exit(0)
    }
}, 1000)
