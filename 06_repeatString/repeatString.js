const repeatString = function(str, times) {
  repeatedString = ""
  if (times < 0){
    return "ERROR"
  }
  for(let i = 0; i < times; i++){
    repeatedString += str
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
