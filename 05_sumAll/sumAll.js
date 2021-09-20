const sumAll = function (x, y) {
    if (x < 0 || y < 0 || [x, y].some(val => typeof val !== 'number')) {
        return "ERROR";
    }

    const n = Math.min(x, y);
    const m = Math.max(x, y);

    return (n + m) * (m - n + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
