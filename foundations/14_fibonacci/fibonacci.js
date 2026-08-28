const fibonacci = function(num) {
    num = Number(num);
    if(num === 0) return 0;
    else if (num < 0) return "OOPS";
    else if (num === 1 || num === 2) return 1;
    const fib = Array(num - 2).fill(0).reduce((arr) => {
        const prevNum = arr[arr.length - 2];
        const currentNum = arr[arr.length - 1];
        const nextNum = prevNum + currentNum;

        arr.push(nextNum);

        return arr;
    }, [1, 1]);

    return fib[fib.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
