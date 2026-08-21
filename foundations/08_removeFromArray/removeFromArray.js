const removeFromArray = function(arr, ...elements) {
    let arrfiltered = arr;
    for (const element of elements) {
        arrfiltered = arrfiltered.filter(item => item !== element);
    }  
    return arrfiltered;
};

// Do not edit below this line
module.exports = removeFromArray;
