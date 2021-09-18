// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// sumFibs(1) should return a number.

// sumFibs(1000) should return 1785.

// sumFibs(4000000) should return 4613732.

// sumFibs(4) should return 5.

// sumFibs(75024) should return 60696.

// sumFibs(75025) should return 135721.

function fibSum(num) {
  let curr = 1; 
  let prev = 0;
  let sum = 0;
  while(curr <= num) {
    if(curr % 2 !== 0) {
      sum += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
  return sum;
}

// refactor

function fibSum(num) {
  if(num <= 0) return 0;
  let arr = [1,1];
  let next = 0;

  while( (next = arr[0]+arr[1]) <= num) {
    arr.unshift(next);
  }
  return arr.filter(x => x % 2 !== 0).reduce((a,b) => a + b)
}

