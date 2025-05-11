//Check if a string (first argument, str) ends with the given target string (second argument, target).
// Do not use the built-in method .endsWith() to solve the challenge.

//"Bastian", "n" -> true
//He has to give me a new name", "name" -> true
//"Open sesame", "same" -> true
//"Open sesame", "pen" -> false
//"Connor", "n" -> false

const confirmEnding = (str, target) => {
	//get the length of target
	const targetLen = target.length;

	//text.substring(text.len-1) returns last char
	//subtract target length to get the ending substring
	//if both matched, return true
	return str.substring(str.length - targetLen) === target;
};

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Open sesame', 'same'));
console.log(confirmEnding('Open sesame', 'pen'));
