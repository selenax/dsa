// take away: each combination need to be unqiue (order doesn't matter) & value inside combination can be repeated as long as they are from diff indices

/*
Problem: 3Sum (Leetcode-15 MEDIUM)
Category: Array

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  Notice that the solution set must not contain duplicate triplets.

  Example 1: Input: nums = [-1,0,1,2,-1,-4]; Output: [[-1,-1,2],[-1,0,1]]
  Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
      The distinct triplets are [-1,0,1] and [-1,-1,2]; Notice that the order of the output and the order of the triplets does not matter.

  Example 2: Input: nums = [0,1,1]; Output: []
    Explanation: The only possible triplet does not sum up to 0.

  Example 3: Input: nums = [0,0,0]; Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.

-----

Approaches: 
1. Brute Force - O(N^3)
  - steps: Using 3 nested loops to find all possible unique combination triplets that sums up to 0; space: O(1)

2. 
-----

1. input: array of integers 
2. output: array of arrays, each inner array has exactly 3 integers 
3. summary: find all unique triplets that sum to 0; 
  - [0,0,0] is valid if 3 zero are from diff indices and is the only [0,0,0] triplet 
  - [1,-1,0], [0,1,-1] count as 1 unqiue triplet 
4. constraints: 
  - n < 3
  - no valid answer 
  - duplicate elements that could form the same triplet

 */

// Brute Force - Time:O(N^3) SPACE:O(1) - i,j,k
const threeSum_bruteforce = (nums) => {
  // - 3 nested loops, i < len-2, j < len-1, k < len
  // - sort and add to Set as string to avoid duplicate
  // - return - convert string back to array

  if (nums.length < 3) return []; // base case

  let resultSet = new Set(); // preserve uniqueness

  for (let i = 0; i < nums.length - 2; i++) {
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          resultSet.add(JSON.stringify(triplet));
        }
      }
    }
  }
  // convert each string to arrays
  return Array.from(resultSet).map((s) => JSON.parse(s));
};

// /* use 3 pointers approach - (x,y,z) - anchor x, and move y and z around to find target

// 	1. sort array to both help handle duplicate and use 2 pointer technique
// 	2. anchor x starting index 0
// 	3. for each x, initalize two pointers: y at x + 1, z at the end of the array
// 	4. as y and z move toward each other, we check sum: arr[x] + arr[y] + arr[z]
// 		1. if sum = target, add these triplets to result and check for y & z duplicates as the curr combination is no longer unique
// 		2. if sum < target, incrememt y
// 		3. if sum > target, decrement z
// 	5. also check x for duplicates to avoid same anchor

// 	Edge case:
// 	1. if array has fewer than 3 elements return early w/ []
// */

// const threeSum = (nums) => {
//   let result = [];

//   // shallow copy of sorted arry
//   const sorted = [...nums].sort((a, b) => a - b);

//   // x stops 2 indices before end of array taking into account of y and z
//   for (let x = 0; x < sorted.length - 2; x++) {
//     // check x duplicates & avoid comparing array[-1]
//     if (x > 0 && sorted[x] === sorted[x - 1]) continue;

//     let y = x + 1;
//     let z = sorted.length - 1;

//     while (y < z) {
//       let sum = sorted[x] + sorted[y] + sorted[z];
//       // found target
//       if (sum === 0) {
//         result.push([sorted[x], sorted[y], sorted[z]]);

//         // check for next duplicate y & z; y < z guard for edge cases like [0, 0, 0, 0] to stay in bound
//         while (y < z && sorted[y] === sorted[y + 1]) y++;
//         while (y < z && sorted[z] === sorted[z - 1]) z--;

//         // increment & decrement y and z to check for next sum
//         y++;
//         z--;
//       } else if (sum < 0) {
//         y++;
//       } else {
//         z--;
//       }
//     }
//   }
//   return result;
// };
// console.log(threeSum([])); //[]
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])); //[]
// console.log(threeSum([0, 0, 0])); //[[0,0,0]]
// console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
// console.log(threeSum([-1, 0, 1, 0])); // [[-1, 0, 1]]
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
// // [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
