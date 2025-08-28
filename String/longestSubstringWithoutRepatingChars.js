/*
Problem: Longest Substring Without Repeating Characters (Leetcode-3)
Category: String

Given a string s, find the length of the longest substring without duplicate characters.
Example 1: Input: s = "abcabcbb"; Output: 3; Explanation: The answer is "abc", with the length of 3.
Example 2: Input: s = "bbbbb"; Output: 1; Explanation: The answer is "b", with the length of 1.
Example 3: Input: s = "pwwkew"; Output: 3; Explanation: The answer is "wke", with the length of 3.
	Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Approaches:
1. Brute Force - O(n^2)
	- steps: For each char as a starting point, compare len of all possible substrings that contain no duplicate characters
	✅ Pros: easy to reason
    ❌ Cons: too slow for large n 

2. Best Approach: Sliding window & hash map - O(n)
	- steps: Use two pointers (start and i) to form a sliding window. 
				Track each character’s last seen index in a hash map. 
				If a duplicate is found inside the window, move start to one past 
				the previous occurrence. Update max length at each step.
	 ✅ Pros: Efficient run time
	 ❌ Cons: less intuitive than brute force
*/

/* 
Approaches 1: Brute Force
Time: O(n^2) - i x j 
Space: O(n) - set grows with substring
*/
const lengthOfLongestSubstring_bruteforce = (s) => {
  // 1. initialize variable maxLen = 0, currStr = ''
  // 2. outer loop i as starting point
  // 3. inner loop j as end point
  // 4. extract substring s[i:j]
  // 4. check if substring has all unique character
  // 	- if yes, track/update maxLen
  // 5. return maxLen

  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const currSet = new Set();
    for (let j = i; j < s.length; j++) {
      if (currSet.has(s[j])) break;
      currSet.add(s[j]);
      maxLen = Math.max(maxLen, currSet.size);
    }
  }
  return maxLen;
};

/*
Approach 2: Sliding window x hash map 
Time: O(n)
Space:
- O(min(n, k)), where n = string length, k = alphabet size.
- If alphabet is fixed (e.g., ASCII = 128 chars), space = O(1).
- If alphabet is unbounded (e.g., full Unicode), space = O(n).
*/

const lengthOfLongestSubstring_hashMap = (str) => {
  // 1. Initialize:
  //    - start = 0, left boundary of current substring window
  //    - max = 0, track longest length so far
  //    - hash = {},  track the last seen index of each character
  // 2. Iterate over string with index i:
  //    - If str[i] is in hash AND hash[str[i]] >= start:
  //        - Duplicate inside window → shift start to hash[str[i]] + 1
  //    - Update hash[str[i]] = i
  //    - Update max = Math.max(max, i - start + 1)
  // 3. Return max
  let hash = {},
    max = 0,
    start = 0;

  for (let i = 0; i < str.length; i++) {
    // duplicate is found within the current window
    if (hash[str[i]] !== undefined && hash[str[i]] >= start) {
      // start a new substr at the next index where this duplicated char appeared
      start = hash[str[i]] + 1;
    }
    hash[str[i]] = i; // update char to last index seen
    max = Math.max(i - start + 1, max); // update new max with current length or previous max
  }
  return max;
};

console.log(lengthOfLongestSubstring_hashMap('ddwfed')); //4
console.log(lengthOfLongestSubstring_hashMap('abccd')); //3
console.log(lengthOfLongestSubstring_hashMap('pwwkew')); //3
console.log(lengthOfLongestSubstring_hashMap('bbb')); //1
