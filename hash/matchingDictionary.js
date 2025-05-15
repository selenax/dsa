// Find all strings that match specific pattern in a dictionary

// Given a dictionary of words, find all strings that matches the given pattern where every character in the pattern is uniquely mapped to a character in the dictionary.

// return null if no matches

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pattern = "foo"
// Output: [xyy abb]
// xyy and abb have same character at
// index 1 and 2 like the pattern

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pat = "mno"
// Output: [abc xyz]
// abc and xyz have all distinct characters,
// similar to the pattern.

// Input:
// dict = ["abb", "abc", "xyz", "xyy"];
// pattern = "aba"
// Output: []
// Pattern has same character at index 0 and 2.
// No word in dictionary follows the pattern.

// Input:
// dict = ["abab", "aba", "xyz", "xyx"];
// pattern = "aba"
// Output: [aba xyx]
// aba and xyx have same character at
// index 0 and 2 like the pattern