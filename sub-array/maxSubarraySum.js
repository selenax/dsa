// Write a function called maxSubarraySum which accepts an array of integers and a 
// number called n. The function should calculate the maximum sum of n consecutive
// element in the array

// O(n^2)
function maxSubarraySum(array, n) {
  //edge : if n is > length, return null
  if(array.length < n) return null;
  //use 2 for loops and add n digits 
    //outer loop will end at length - n + 1 b/c that's the last interval of numbers
    // use inner loop to create small window to accumulate sum up to n digits 
  let max = -Infinity;

  for(let x = 0; x < array.length - n + 1; x++) {
    let sum = 0;
    for(let y = 0; y < n; y++) {
      sum += array[x + y]; 
    }
    // create variable to store max 
    // if curr sum is bigger than max, max = sum 
      //return max 
    if(max < sum) {
      max = sum;
    }
  }
  return max;
}

//refactor (sliding window) 0(N) 

function maxSubarraySum(arr, n) {
  if(arr.length < n) return null;
  //accumulate sum of n digits and store to max variable  
  let max = 0;
  //loop from start n;
  //to get next interval sum, subtract first index of current internval, and then add current index - store in temp;
  //compare temp to max 
    //assign temp to max if temp is greater 

  //return max;
  for(let x = 0; x < n; x++) {
    max += arr[x];
  }

  let temp = max;
  for(let x = n; x < arr.length; x++) { 
    temp = temp - arr[x-n];
    temp += arr[x];
    if(temp > max) {
      max = temp;
    }
  }
  return max;                    
} 


console.log(maxSubarraySum([4,2,1,6,5,2], 3));  // 13
console.log(maxSubarraySum([1,2,5,2,7,8,1,5], 2)); // 15
console.log(maxSubarraySum([1,2,5,2,7,8,1,5], 4)); // 22
console.log(maxSubarraySum([4,2,1,6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null


