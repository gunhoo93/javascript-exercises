const palindromes = function (str) {
    const sanitizedStr = str.replace(/\W+/g, '').toLowerCase();
    for (let i = 0, j = sanitizedStr.length - 1; i <= j; ++i, --j) {
        if (sanitizedStr[i] !== sanitizedStr[j]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
