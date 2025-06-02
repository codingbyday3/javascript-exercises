const fibonacci = function(numOfMember) {
  let fibonacciArr = [1]
  let fibonacciNum = 0
  let i = 1

  if(numOfMember < 0){
    return "OOPS"
  }

  while(i <= numOfMember){
    i++
    fibonacciArr.push(fibonacciNum)
  
    fibonacciNum += (fibonacciArr[fibonacciArr.length - 2]) 
    
  }

  return fibonacciNum
};

// Do not edit below this line
module.exports = fibonacci;
