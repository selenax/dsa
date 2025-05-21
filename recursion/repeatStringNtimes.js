// Repeat a given string (first argument) num times (second argument). Return an null if num is not a positive number.

function repeatStringNumTimes(str, num) {
	// if 2nd arg is less than 0, return null
	if (num < 0) {
		return null;
	}
	// if stri len is 1, return stri
	if (num === 1) {
		return str;
	} else {
		// concat current string each recursion call
		return str + repeatStringNumTimes(str, num - 1);
	}
}

console.log(repeatStringNumTimes('abc', 3)); // abbcabcabc
console.log(repeatStringNumTimes('*', 3)); // "***"
console.log(repeatStringNumTimes('abc', 4)); // "abcabcabcabc"
console.log(repeatStringNumTimes('abc', 1)); // "abc"
console.log(repeatStringNumTimes('*', 8)); // "********"
console.log(repeatStringNumTimes('abc', -2)); // ""
