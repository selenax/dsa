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
// TIME:O(N^2) SPACE:O(N)
// input: number[]
// output: number[][] - each inner array is a unique triplet summing to 0;
// key - unique indices but values could be repeated, also no repeat triples 

/* use 3 pointers approach - (x,y,z) - anchor x, and move y and z around to find target

	1. sort array to both help handle duplicate and use 2 pointer technique 
	2. anchor x starting index 0
	3. for each x, initalize two pointers: y at x + 1, z at the end of the array
	4. as y and z move toward each other, we check sum: arr[x] + arr[y] + arr[z]
		1. if sum = target, add these triplets to result and check for y & z duplicates as the curr combination is no longer unique  
		2. if sum < target, incrememt y
		3. if sum > target, decrement z 
	5. also check x for duplicates to avoid same anchor

	Edge case: 
	1. if array has fewer than 3 elements return early w/ []
*/

const threeSum = (nums) => {
	let result = [];

	// shallow copy of sorted arry
	const sorted = [...nums].sort((a, b) => a - b);

	// x stops 2 indices before end of array taking into account of y and z 
	for (let x = 0; x < sorted.length - 2; x++) {
		// check x duplicates & avoid comparing array[-1]
		if(x > 0 && sorted[x] === sorted[x-1]) continue;

		let y = x + 1;
		let z = sorted.length - 1;

		while(y < z) {
			let sum = sorted[x] + sorted[y] + sorted[z]
			// found target
			if(sum === 0) {
				result.push([sorted[x], sorted[y],sorted[z]]);
			
			// check for next duplicate y & z 
			while(sorted[y] === sorted[y+1]) y++;
			while(sorted[z] === sorted[z-1]) z--;

			// increment & decrement y and z to check for next sum
			y++;
			z--;
			} else if (sum < 0) {
				y++
			} else {
				z--;
			}
		}
	}
	return result;
};
console.log(threeSum([])) //[]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([-1, 0, 1, 0])); // [[-1, 0, 1]]
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));  
// [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]


