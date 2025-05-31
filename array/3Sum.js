// ### [15 3Sum](https://leetcode.com/problems/3sum/)

// Difficulty: **Medium**

// Related Topics: [Array](https://leetcode.com/tag/array/), [Two Pointers](https://leetcode.com/tag/two-pointers/), [Sorting](https://leetcode.com/tag/sorting/)

// Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

// Notice that the solution set must not contain duplicate triplets.

// **Example 1:**
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// **Example 2:**
// Input: nums = []
// Output: []

// **Example 3:**
// Input: nums = [0]
// Output: []

// all 3 element that will sum to 0 as long as they are not repeated.
// order doesnt matter

//ALGORITHM: 2 Pointer
//TIME:O(N^2) SPACE:O(1)
const threeSum = function (nums) {
	let result = [];
	nums.sort((a, b) => a - b);

	if (nums.length < 3) return result;

	// x will be anchored at each iteration as y and z moves around to check for 0
	for (let x = 0; x < nums.length - 2; x++) {
		// since we can't have duplicates, skip current iteration if nums[x] is same as previous
		if (x > 0 && nums[x] === nums[x - 1]) continue;

		let y = x + 1;
		let z = nums.length - 1;

		while (y < z) {
			let sum = nums[x] + nums[y] + nums[z];
			//if sum = target, we have a match, push to result
			if (sum === 0) {
				result.push([nums[x], nums[y], nums[z]]);
				//since no duplicates, we don't want y and z if they will be the same values
				while (nums[y] === nums[y + 1]) y++;
				while (nums[z] === nums[z - 1]) z--;
				//increment and decrement y and z to check for next sum
				y++;
				z--;
			} else if (sum < 0) {
				y++; // make y bigger if sum is smaller than 0
			} else {
				z--; // make z smaller if sum is bigger than 0
			}
		}
	}
	return result;
};

console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([1, -1, -1, 0]));
