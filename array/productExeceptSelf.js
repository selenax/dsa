// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

/*
start at index 0
[1, 1, 2, 6]

start at end 
[24, 12, 4, 1]

*/

function productExceptSelf(array) {
  let left = [];
  let right = [];
  let result = [];
  let product = 1;
  for(let x = 0; x < array.length; x++) {
    if(x === 0) {
      left.push(product);
    } else {
      product *= array[x-1];
      left.push(product)
    }
  }
  product = 1;
  for(let y = array.length -1; y >= 0; y--) {
    if(y === array.length -1) {
      right.push(product)
    } else {
      product *= array[y+1]
      right.push(product)
    }
  }
  right.reverse()

 for (let i = 0; i < right.length; i++) {
   result.push(right[i] * left[i])
 }
  return result;
}


console.log(productExceptSelf([1,2,3,4]));

// refactor 
