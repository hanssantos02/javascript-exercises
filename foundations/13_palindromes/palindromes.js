const palindromes = function (forward) {
    forward = forward.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const backward = forward
                            .replace(/[^A-Za-z0-9]/g, "")
                            .toLowerCase()
                            .split("")
                            .reverse()
                            .join("");
    return backward === forward;
};

// Do not edit below this line
module.exports = palindromes;
