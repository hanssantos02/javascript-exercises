const factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else if (n < 0 || typeof n !== "number" || !Number.isInteger(n)) {
        return undefined;
    }

    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;