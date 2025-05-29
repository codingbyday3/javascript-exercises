const reverseString = function(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join("")).reverse().join(" ")

};

// Do not edit below this line
module.exports = reverseString;
