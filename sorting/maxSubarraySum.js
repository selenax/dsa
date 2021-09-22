// Write a function called maxSubarraySum which accepts an array of integers and a 
// number called n. The function should calculate the maximum sum of n consecutive
// element in the array


function maxSubarraySum(array, n) {
  //edge : if n is > length, return null
  if(array.length < n) return null;
  //use 2 for loops and add n digits 
    //outer loop will end at length - n + 1 b/c that's the last interval of numbers
    // inner loop will iterate up til n and accumulate sum;
  let max = -Infinity;

  for(let x = 0; x < array.length - n + 1; x++) {
    let sum = 0;
    for(let y = 0; y < n; y++) {
      sum += array[x + y]; 
    }
    if(max < sum) {
      max = sum;
    }
  }
  return max;

  // create variable to store max 
    // if curr sum is bigger than max, max = sum 
  //return max 
}

console.log(maxSubarraySum([1,2,5,2,7,8,1,5], 2)); // 15
console.log(maxSubarraySum([1,2,5,2,7,8,1,5], 4)); // 22
console.log(maxSubarraySum([4,2,1,6], 1)); // 6
console.log(maxSubarraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null


