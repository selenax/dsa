// 15. 3Sum (MEDIUM)
// Hint: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// ALGORITHM: 3 POINTER APPROACH BY SORT + 2 POINTER
// input: number[]
// output: number[][] - each inner array is a unique triplet summing to 0;

/* use 3 pointers approach - (x,y,z) - anchor x, and move y and z around to find target

	1. sort array to both help handle duplicate and use 2 pointer technique 
	2. anchor x starting index 0
	3. for each x, initalize two pointers: y at x + 1, z at the end of the array
	4. as y and z move toward each other, we check sum: arr[x] + arr[y] + arr[z]
		1. if sum = target, add these triplets to result and check for y & z duplicates as this combination is no longer unique  
		2. if sum < target, incrememt y
		3. if sum > target, decrement z 
	5. also check x for duplicates to avoid same anchor

	Edge case: 
	1. if array has fewer than 3 elements return early w/ []
*/

const threeSum = (nums) => {};
