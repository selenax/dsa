// 347. Top K Frequent Elements
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

//Brute Force: TIME:O(n log n) SPACE:O(N)
const topKFrequent = function (nums, k) {
	let hash = {};

	// frequency hash map
	for (let val of nums) {
		hash[val] = 1 + (hash[val] ?? 0);
	}

	// sort entries by fequency in descending
	let arr = Object.entries(hash).sort((a, b) => b[1] - a[1]); //[[1,3], [2,2], [3,1]]

	// return top k in array
	return arr.slice(0, k).map(([num]) => Number(num));
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[1,2]
console.log(topKFrequent([1], 1)); //[1]
