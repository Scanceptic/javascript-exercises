const palindromes = function (string) {
    // remove punctuation and whitespace and make lowercase
    const regex = /[^A-Za-z0-9]/gi
    cleanString = string.replace(regex, "").toLowerCase();
    //console.log(cleanString);
    // Find index at half string length
    // Math.ceil to round up odd lengths
    // -1 to get index position (starts from 0 not 1)
    let halfIndex = cleanString.length/2 - 1;
    console.log("Total string length = " + cleanString.length); 
    if (cleanString.length % 2 !== 0) {
        console.log("Odd");
        halfIndex = Math.ceil(cleanString.length/2) - 1;
    };
    console.log("Half Index = " + halfIndex);
    //console.log(halfIndex);
    // Slice string in half
    let string1 = cleanString.slice(0, halfIndex + 1);
    console.log(string1);
    let string2 = cleanString.slice(halfIndex, );
    console.log(string2);

    // if string2 is too long take off a start char
    if (string2.length > string1.length) {
        string2 = string2.slice(1, );
    };
    // Reverse 2nd half (split to array, reverse, join to string)
    string2 = string2.split("").reverse().join("");
    //console.log(string2)
    // if 1st half and 2nd half not identical
    if (string1 !== string2) {
        return false;
    } else {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
