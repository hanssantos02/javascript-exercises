const reverseString = function(str) {
    let revstr = '';
    let position = -1;
    for (let i = 0; i < str.length; i++) {
        revstr += str.at(position);
        position -= 1;
    }
    return revstr;
};

// Do not edit below this line
module.exports = reverseString;
