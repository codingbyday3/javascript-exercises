const removeFromArray = function (arr, ...numbersToRemove) {
  newArr = []

  arr.forEach((num) =>{
    if(!numbersToRemove.includes(num)){
      newArr.push(num)
    }
  })
  return newArr
}
// Do not edit below this line
module.exports = removeFromArray;
