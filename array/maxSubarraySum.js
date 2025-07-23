// Write a function called maxSubarraySum which accepts an array of integers and a
// number called n. The function should calculate the maximum sum of n consecutive
// element in the array

/*

- input: [] = integers, n = #
- summary: find the biggest sum with n consecutive elements from the input array
- edge case: 
    1. [], return null
    2. n > arr.len, return null
- output: integer

note:
- brute force is using nested loop and add n consecutive elements, keep tracking of the max sum at each iteration, but that would be O(n^2)
- Optimize by using 1 loop, using the sliding window approach 
    1. start with sum of n consecutive elements
    2. at each iteration, add the current value and subtract the first element of this subaray (i - n; as i increase so is the index we are tracking to subtract) 
    3. keep track of the max sum at each iteraion 

Time: O(n) - sliding window
Space: O(1)

*/

const maxSubarraySum = (arr, n) => {
  // edge case, insufficient elements
  if (arr.length < n) return null;

  let maxSum = 0;

  // initial window sum
  for (let i = 1; i < n; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  // sliding window - subtract and add
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

//------------------------------//
// O(n^2)
function maxSubarraySum(array, n) {
  //edge : if n is > length, return null
  if (array.length < n) return null;
  //use 2 for loops and add n digits
  //outer loop will end at length - n + 1 b/c that's the last interval of numbers
  // use inner loop to create small window to accumulate sum up to n digits
  let max = -Infinity;

  for (let x = 0; x < array.length - n + 1; x++) {
    let sum = 0;
    for (let y = 0; y < n; y++) {
      sum += array[x + y];
    }
    // create variable to store max
    // if curr sum is bigger than max, max = sum
    //return max
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

//refactor (sliding window) 0(N)
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  //accumulate sum of n digits and store to max variable
  let max = 0;
  //loop from start n;
  //to get next interval sum, subtract first index of current internval, and then add current index - store in temp;
  //compare temp to max
  //assign temp to max if temp is greater

  //return max;
  for (let x = 0; x < n; x++) {
    max += arr[x];
  }

  let temp = max;
  for (let x = n; x < arr.length; x++) {
    temp = temp - arr[x - n];
    temp += arr[x];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([4, 2, 1, 6, 5, 2], 3)); // 13
console.log(maxSubarraySum([1, 2, 5, 2, 7, 8, 1, 5], 2)); // 15
console.log(maxSubarraySum([1, 2, 5, 2, 7, 8, 1, 5], 4)); // 22
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null
