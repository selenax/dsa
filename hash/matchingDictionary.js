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
// index 0 and 2 like the patternt

const matchPatterDictionary = (dic, pat) => {
	let result = [];
	for (let prop of dic) {
		//only check if word has same len as pat
		if (prop.length === pat.length) {
			//helper function hashMap will return a string consisted of a pattern from the given word
			//if both strings match, push to result
			if (hashMap(prop) === hashMap(pat)) {
				result.push(prop);
			}
		}
	}
	return !result.length ? null : result;
};

function hashMap(str) {
	let hash = {};
	let result = '';

	for (let prop of str) {
		hash[prop] = ++hash[prop] || 1;
	}
	// loop over str and for each char, check to see the value in hash,
	// accummulate each value into result
	for (let char of str) {
		if (hash[char]) {
			result += hash[char];
		}
	}
	// return result
	return result;
}

console.log(matchPatterDictionary(['xxyzzaabcdd'], 'mmnoopplfmm')); // null
console.log(matchPatterDictionary(['abab', 'aba', 'xyz', 'xyx'], 'aba')); // [ 'aba', 'xyx' ]
console.log(matchPatterDictionary(['abb', 'abc', 'xyz', 'xyy'], 'mno')); // [abc xyz]
