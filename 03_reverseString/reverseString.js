const reverseString = function(string) {
    stringArray = string.split('');
    stringArray = stringArray.reverse();
    stringArray = stringArray.join('')
    return stringArray;
};

// Do not edit below this line
module.exports = reverseString;
