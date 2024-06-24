const palindromes = function (string) {
    // remove punctuation and whitespace and make lowercase
    const regex = /[^A-Za-z0-9]/gi
    cleanString = string.replace(regex, "").toLowerCase();
    //console.log(cleanString);
    let string1 = cleanString;
    // Reverse 2nd half (split to array, reverse, join to string)
    let string2 = cleanString.split("").reverse().join("");
    //console.log(string2)
    // Return outcome of comparison true/false
    return string1 === string2;
};

// Do not edit below this line
module.exports = palindromes;
