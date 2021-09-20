const reverseString = function (str) {
    const reversed = [];
    for (let i = 0; i < str.length; ++i) {
        reversed[str.length - i] = str[i];
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
