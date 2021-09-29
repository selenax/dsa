// Arrange Given Numbers To Form The Biggest Number Possible
// Write a function that takes a number as input and outputs the biggest number with the same set of digits.

// For example, suppose the input is 423865, then the biggest number with these digits is 865432.

// brute force  O(n^2)
function biggestNumberPossible(n) {
  let num = n.toString().split('');
  return num.map(val => Number(val)).sort((a,b) => b - a).join('');
}


console.log(biggestNumberPossible(423865));
console.log(biggestNumberPossible(423165));

