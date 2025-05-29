const removeFromArray = function (arr, ...numbersToRemove) {
  for (let num of numbersToRemove) {
    while(arr.includes(num)){
      arr.splice(arr.indexOf(num), 1);
    }
  }
  return arr
}
// Do not edit below this line
module.exports = removeFromArray;
