//Check if a string (first argument, str) ends with the given target string (second argument, target).
// Do not use the built-in method .endsWith() to solve the challenge.

//"Bastian", "n" -> true
//He has to give me a new name", "name" -> true
//"Open sesame", "same" -> true
//"Open sesame", "pen" -> false
//"Connor", "n" -> false

// ALGORITHM: USING SUBSTRING
// TIME:O(K), k=substring of target length;
// SPACE:O(1), temp string = O(K) = constant overhead since doesn't scale w/ input size
const confirmEnding = (str, target) => {
	//get the length of target
	const targetLen = target.length;

	//text.substring(text.len-1) returns last char
	//subtract target length to get the ending substring
	//if both matched, return true
	return str.substring(str.length - targetLen) === target;
};

// ALGORITHM: USING LOOP
// TIME:O(N) SPACE:(1)
const confirmEnding2 = (str, target) => {
	//if target len is greater than str len, return false
	if (target.length > str.length) return false;

	// option 1:
	// traverse backwards using target to match with str
	// let strLen = str.length;
	// for (let i = target.length - 1; i >= 0; i--) {
	// 	if (target[i] !== str[--str.length]) {
	// 		return false;
	// 	}
	// }

	// option 2:
	// traverse from ending string
	for (let i = 0; i < target.length; i++) {
		if (target[i] !== str[str.length - target.length + i]) return false;
	}
	return true;
};

// ALGORITHM: USING endsWith
// const confirmEnding3 = (str, target) => {
//     return str.endsWith(target)
// }

console.log(confirmEnding2('Bastian', 'n'));
console.log(confirmEnding2('Open sesame', 'same'));
console.log(confirmEnding2('Open sesame', 'pen'));
