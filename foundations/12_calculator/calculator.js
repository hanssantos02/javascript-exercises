const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sumArr = arr.reduce((total, item) => {
    return total + item;
  }, 0)
  return sumArr;
};

const multiply = function(arr) {
  const productArr = arr.reduce((total, item) => {
    return total * item;
  })
  return productArr;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	const numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  return numbers.reduce((total, item) => {
    return total * item;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
