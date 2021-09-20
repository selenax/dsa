// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// brute force O(n^2)

//two for loops iterate through each number to see if their sum will match target
// if match return index
function twoSum(arr, target) {
  for(let x = 0; x < arr.length; x++) {
    for(let y = 1; y < arr.length; y++) {
      if(arr[x] + arr[y] === target) {
        return true;
      }
    }
  }
}

function twoSum(arr, target) {
  let hash = {}; 
  for(let x = 0; x < arr.length; x++) {
    let diff = target - arr[x];
    if(hash[arr[x]] !== undefined) {
      return [x, hash[arr[x]]];
    } else {
      hash[diff] = x;
      console.log(hash);
    }
  }
}

console.log(twoSum([1,2,3,4], 7));



