const sumAll = function(...args) {    
    // Confirm 2 parameters only
    if (args.length !== 2) {
        return 'ERROR';
    }
    // Confirm number parameters
    if (typeof(args[0]) !== 'number' || typeof(args[1]) !== 'number') {
        return 'ERROR';
    }
    // Confirm positive number parameters
    if (args[0] < 1 || args[1] < 1) {
        return 'ERROR';
    }

    let sortedArgs = args.sort();
    let sum = 0;
    
    for (let i = sortedArgs[0]; i <= sortedArgs[1]; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
