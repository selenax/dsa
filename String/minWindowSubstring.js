/*
Problem: Minimum Window Substring (Hard Leetcode-76)

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1: Input: s = "ADOBECODEBANC", t = "ABC"; Output: "BANC"; Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2: Input: s = "a", t = "a"; Output: "a"; Explanation: The entire string s is the minimum window.
Example 3: Input: s = "a", t = "aa"; Output: ""; Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.


----------------------

input: s, t = string
output: '' || str
summary: find the shortest substring in s that contains all letters of t
edge case:
    1. if t.len > s.len return ''
    2. if t == '', return ''


*/
const minWindow = function (s, t) {};
