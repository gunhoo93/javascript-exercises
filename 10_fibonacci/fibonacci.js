const fibonacci = function (n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    }

    let fib = 1;
    for (let a = 1, b = 1; n > 2; --n) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
