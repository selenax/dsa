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

const threeSum = function (nums) {
	let result = [];
	nums.sort((a, b) => a - b);

	if (nums.length < 3) return result;

	// x will be anchored at each iteration as y and z moves around to check for target sum
	for (let x = 0; x < nums.length - 2; x++) {
		//skip duplicates
		if (x > 0 && nums[x] === nums[x - 1]) continue;

		let y = x + 1;
		let z = nums.length - 1;
		let target = 0;

		while (y < z) {
			let sum = nums[x] + nums[y] + nums[z];

			//if sum = target, we have a match, push to result
			if (sum === target) {
				result.push([nums[x], nums[y], nums[z]]);

				while (nums[y] === nums[y + 1]) y++; //skip duplicates
				while (nums[z] === nums[z - 1]) z--;
				//increment and decrement y and z to check for next sum
				y++;
				z--;
			} else if (sum < target) {
				y++; //get the next bigger value for y to make sum bigger
			} else {
				z--; //get the next smaller value for z to make sum smaller
			}
		}
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); //[]
console.log(threeSum([0, 0, 0])); //[[0,0,0]]
