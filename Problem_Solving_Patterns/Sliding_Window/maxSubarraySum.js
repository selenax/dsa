/*
1. accepts an array of integers and a number called n
2. should calculate the max sum of n consecutive elements in the array
*/

//* are there going be negative values? <- set max to -Infinity

//! time:O(N^2) space:O(1)
function maxSubarraySum(arr, n) {
  if(!arr.length) return null;

  let max = -Infinity;
  // i need to account for the last n # of values to avoid going overbound 
  for(let i = 0; i <= arr.length - n; i++) {
    let sum = 0;
    for(let j = 0; j < n; j++)  {
      // position i will be the anchor allowing j to move toward n #'s
      sum += arr[i + j]
  }
    max = Math.max(sum, max)
}
  return max; 
}
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); //10

// //! time:O(N) space:O(1)
// //whenever we add a new value, we subtract the first value to get the new sum
// function maxSubarraySum(arr, n) {
//   // 1st loop accumulate first n number sum
//   let sum = 0;
//   for(let i = 0; i < n; i++) {
//     sum += arr[i]
//   }

//   // 2nd loop start at n
//   // add next index, subtract first index from sum
//   // n = 3 [0 , 1, 2]
//     //  [0,1,2 3, 4] // current = 4, subtract 4-N = 1
//   // index 3 -> add to sum, subtract index 0 => current index(3) - N 
//   // compare max 
//   let max = sum
//   for(let j = n; j < arr.length; j++) {
//     sum += arr[j] - arr[j-n] 
//     // sum += arr[j]
//     // sum -= arr[j-n]
//     max = Math.max(sum, max)
//   }
//   return max;
// }


// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); //10
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)); //17
// console.log(maxSubarraySum([], 4)); //null
// console.log(maxSubarraySum([4,2,1,6], 1)); //6
// console.log(maxSubarraySum([-4,2,1,-6], 3)); //-1
                           
