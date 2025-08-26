// Compare two version strings
// return:
// -1 if v1 < v2
// 1 if v1 > v2
// 0 if they are equal (even if one has trailing zeros)

// Explanation:
// ('20', '2.0.4') -> '20'
// ('12.0.1', '12.0.1.1.0') -> '12.0.1.1.0'
// ('1.2.2', '1.3') -> 1.3

//TIME:O(N) SPACE:O(N+M)
const versionControl = (v1, v2) => {
	//split each parameter into array by '.' and convert each digit into numbers
	const v1Arr = v1.split('.').map(Number);
	const v2Arr = v2.split('.').map(Number);

	//get the max len between v1 & v2 to use in for loop
	const maxLen = Math.max(v1Arr.length, v2Arr.length);

	for (let i = 0; i < maxLen; i++) {
		const num1 = v1Arr[i] || 0; //assign 0 if out of bound
		const num2 = v2Arr[i] || 0;
		//compare each value
		if (num1 < num2) return -1;
		if (num1 > num2) return 1;
	}
	return 0; //equal
};

// return:
// v1 if v1 > v2
// v2 if v1 < v2
// shorter version if equal

const versionControl2 = (v1, v2) => {
	// split string
	const v1Arr = v1.split('.').map(Number);
	const v2Arr = v2.split('.').map(Number);

	// traverse the longer string when comparing string of diff lengths
	const maxLen = Math.max(v1Arr.length, v2Arr.length);

	for (let i = 0; i < maxLen; i++) {
		// account for when out of bound
		const num1 = v1Arr[i] || 0;
		const num2 = v2Arr[i] || 0;

		if (num1 > num2) return v1;
		if (num1 < num2) return v2;
	}
	// return shorter version if equal
	return v1Arr.length <= v2Arr.length ? v1 : v2;
};

console.log(versionControl2('20', '2.0.4')); //'20'
console.log(versionControl2('1', '0.0.4')); //'1'
console.log(versionControl2('1.3', '1.2.2')); //'1.3'
console.log(versionControl2('2.0.1', '2.0.1')); //'2.0.1' (equal)
console.log(versionControl2('1.1.2', '1.1')); //'1.1.2'
console.log(versionControl2('1.2.2', '1.3')); //'1.3'
console.log(versionControl2('12.0.1.0', '12.0.1')); //'12.0.1' (equal)
console.log(versionControl2('12.0.1', '12.0.1.1.0')); //'12.0.1.1.0'
