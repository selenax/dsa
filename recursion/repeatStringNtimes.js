// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	if (num < 0) {
		return 'n/a';
	}
	if (num === 1) {
		return str;
	} else {
		return str + repeatStringNumTimes(str, num - 1);
	}
}

console.log(repeatStringNumTimes('abc', 3)); // abbcabcabc
console.log(repeatStringNumTimes('*', 3)); // "***"
console.log(repeatStringNumTimes('abc', 4)); // "abcabcabcabc"
console.log(repeatStringNumTimes('abc', 1)); // "abc"
console.log(repeatStringNumTimes('*', 8)); // "********"
console.log(repeatStringNumTimes('abc', -2)); // ""
