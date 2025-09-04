/*
Problem: Longest Substring Without Repeating Characters (Leetcode-424)
Category: String

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1: Input: s = "ABAB", k = 2; Output: 4; Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2: Input: s = "AABABBA", k = 1; Output: 4; Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4. There may exists other ways to achieve this answer too.

---------------------
1. input: s = string, k = integer 
2. output: integer (max length)
3. summary: find length of longest substring of a repeated character by replacing at most k chararacters
4 edge cases: 
  1. if s is emtpy, return 0?
  2. if k is >= s.len, return s.len? 
  3. s contains only uppercase english characters?

Key idea: Track the frequency of characters in the current substring as well as the highest frequency
          The difference (current substring length – highest frequency) is the number of replacements needed to make the substring uniform.
          If that number is ≤ k, the substring is valid.

Approaches:
1. Brute Force - O(n^2)
   - Use index i as the start of each substring
   - Move index j forward, update frequency of chars and track the highest frequency
   - Compute replacements = (substring length – highest frequency)
   - If replacements ≤ k, the substring is valid → record max length
   - If replacements > k, break (replacements doesn't decrease as j grows)

2. Sliding Window (O(n)):
  1. Use two pointers l, r and a frequency map.
  2. Expand r each step, increment freq[s[r]], update maxFreq.
  3. If (window length – maxFreq) > k, shrink from left by moving l.
  4. Track maxLen as the largest valid window length.

*/

const characterReplacement_bruteforce = (s, k) => {
  // 1) For each start i, clear freq and maxFreq = 0
  // 2) Extend j from i to end:
  //    - Increment freq[s[j]] and update maxFreq
  //    - Update maxFreq if needed
  //    - Let len = j - i + 1, diff = len - maxFreq.
  //    - If diff ≤ k, update maxLen.
  //    - If diff > k, break (diff cannot decrease as j grows).
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const freq = {}; // char -> count
    let maxFreq = 0;

    for (let j = i; j < s.length; j++) {
      const char = s[j];
      freq[char] = (freq[char] || 0) + 1;
      if (freq[char] > maxFreq) maxFreq = freq[char];

      const len = j - i + 1;
      if (len - maxFreq <= k) {
        maxLen = Math.max(maxLen, len);
      } else {
        break;
      }
    }
  }
  return maxLen;
};
