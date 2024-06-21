const removeFromArray = function(...args) {
    let inputArray = args[0];
    let removeArguments = args.slice(1);

    let outputArray = inputArray.filter((element) => !removeArguments.includes(element));
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
