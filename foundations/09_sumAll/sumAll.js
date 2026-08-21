const sumAll = function(num, range) {
    let sum = 0;
    if (num > range) {
        [num, range] = [range, num];
    }
    if (num < 0 || !Number.isInteger(num) || !Number.isInteger(range)) sum = "ERROR";
    else {
        for (let i = num; i <= range; i++) {
                sum += i;
        };
    };
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
