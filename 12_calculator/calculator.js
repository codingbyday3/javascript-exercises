const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arrOfNum) {
	return arrOfNum.reduce((total, num) => total + num, 0)
};

const multiply = function(arrOfNum) {
  return arrOfNum.reduce((total, num) => total * num, 1)
};

const power = function(num1, num2) {
	return num1**num2
};

const factorial = function(num) {
  total = 1
	while(num !== 0){
    total *= num
    num--
  }
  return total
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
