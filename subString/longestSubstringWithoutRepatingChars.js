// Longest Substring Without Repeating Characters - Medium
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// TIME:O(N) SPACE:O(1)
const lengthOfLongestSubstring = (str) => {
	let hash = {};
	let max = 0;
	let start = 0;

	for (let i = 0; i < str.length; i++) {
		//assign current char as key, index as value
		let currChar = str[i];

		// need to account for when duplicate is at index 0, falsy value so can't use if curr >=0
		if (hash[currChar] >= start) {
			// if duplicate char, start again from last index of the char + 1
			start = hash[currChar] + 1;
		}
		//if not in hash, add and assign index as value
		hash[currChar] = i;
		max = Math.max(max, i - start + 1);
	}
	return max;
};

console.log(lengthOfLongestSubstring('ddwfed')); //4
console.log(lengthOfLongestSubstring('abccd')); //3
console.log(lengthOfLongestSubstring('pwwkew')); //3
console.log(lengthOfLongestSubstring('bbb')); //1
