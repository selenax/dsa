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

*** Approaches ***

1. Brute Force - O(N^3)
  - steps: 
      1. Using 3 nested loops (i,j,k) to find all possible unique combination triplets that sums up to 0
      2. preserve uniqueness by sorting each valid triplet and add as string in Set(). 
      3. map over Set and JSON.parse each string back into array.  

2. Optimized: Two Pointer - O(N)
  - steps: 
    1. first sort 
    2. using 1 loop, anchoring index i while moving pointer j and k to find target 

-----

* input: array of integers 
* output: array of arrays, each inner array has exactly 3 integers 
* summary: find all unique triplets that sum to 0; 
  - [0,0,0] is valid if 3 zero are from diff indices and is the only [0,0,0] triplet 
  - [1,-1,0], [0,1,-1] count as 1 unqiue triplet 
* constraints: 
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

// Two Pointer
// Time: O(N^2) - i runs n times, while loop (j,k) potentially running n times; O(n^2) * sorting-O(n log n) = O(n^2)
// Space: O(1) - i,j,k and temp sum
const threeSum_twopointer = (nums) => {
  // sort array to handle duplicate and enable two pointer techique
  // anchor i starting at index 0
  // for each i, initialize 2 pointers: j = i + 1, k = last index
  //   as j and k move toward each other, check sum n[i] + n[j] + n[k]
  //   1. sum = target, add triplet to result, check for duplicates of j and k since this triplet is no longer unique.
  //   2. sum < target, j++
  //   3. sum > target, k--
  // also check i for duplicate to avoid same anchor

  if (nums.length < 3) return [];

  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // check for duplicate x & stay in bound
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // initialize j & k
    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // case 1: found target
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        // skip duplicates & stay in bound
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;

        // get ready for next sum
        j++;
        k--;

        // case 2: sum < 0
      } else if (sum < 0) {
        j++;
      } else {
        // case 3: sum > 0
        k--;
      }
    }
  }
  return result;
};
console.log(threeSum_twopointer([])); //[]
console.log(threeSum_twopointer([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum_twopointer([0, 1, 1])); //[]
console.log(threeSum_twopointer([0, 0, 0])); //[[0,0,0]]
console.log(threeSum_twopointer([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum_twopointer([-1, 0, 1, 0])); // [[-1, 0, 1]]
console.log(threeSum_twopointer([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
// [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
