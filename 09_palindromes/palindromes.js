const palindromes = function (string) {
    // remove punctuation
    // remove whitespace
    console.log(string);
    const regex = /[^A-Za-z]/gi
    cleanString = string.replace(regex, "");
    console.log(cleanString);
    // Find index at half string length
    // Math.ceil to round up odd lengths
    // -1 to get index position (starts from 0 not 1)
    let halfIndex = Math.ceil(string.length/2) - 1;
    console.log(halfIndex);
    // Slice string in half
    let string1 = string.slice(0, string.length()/2);
    let string2 = ;
    // Reverse 2nd half

    // if 1st half and 2nd half not identical
        // return false
    // else return true
};

// Do not edit below this line
module.exports = palindromes;
