// Leap year is always divisible by 400 or divisible by 4 but not 100.
const leapYears = function (year) {
    const divisible = (n, m) => n % m === 0;

    return divisible(year, 400) || (divisible(year, 4) && !divisible(year, 100));
};

// Do not edit below this line
module.exports = leapYears;
