const contains = function(obj, target) {
    for (const key in obj) {
        const value = obj[key];

        if (Object.is(value, target)) {
            return true;
        }

        if (typeof value === "object" && value !== null) {
            if (contains(value, target)) {
                return true;
            }
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
