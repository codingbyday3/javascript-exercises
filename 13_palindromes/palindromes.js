const palindromes = function (palindrome) {
  palindrome = palindrome.toLowerCase();
  backwardWord = palindrome
    .split('')
    .reverse()
    .join('')
    .replace(/[^a-z0-9]/gi, '');

 
  return backwardWord === palindrome.replace(/[^a-z0-9]/gi, '')

};


// Do not edit below this line
module.exports = palindromes;
