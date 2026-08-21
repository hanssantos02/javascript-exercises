const repeatString = function(str, num) {
    let str1 = str;
    if (num === 0) str1 = "";
    else if (num < 0) str1 = "ERROR";
    else {
        for (let i = 1; i < num; i++) {
        str1 += str;
        };
    };  
    return str1;
};


// Do not edit below this line
module.exports = repeatString;
