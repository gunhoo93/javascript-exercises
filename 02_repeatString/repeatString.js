const repeatString = function (str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    return new Array(n).fill(str, 0, n).join('');
};

// Do not edit below this line
module.exports = repeatString;
