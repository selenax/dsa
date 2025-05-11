// Compare two version strings
// return:
// -1 if v1 < v2
// 1 if v1 > v2
// 0 if they are equal (even if one has trailing zeros)

// Explanation:
// ('20', '2.0.4') -> '20'
// ('12.0.1', '12.0.1.1.0') -> '12.0.1.1.0'
// ('1.2.2', '1.3') -> 1.3

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

console.log(versionControl('20', '2.0.4')); //'20'
console.log(versionControl('1', '0.0.4')); //'1'
console.log(versionControl('1.3', '1.2.2')); //'1.3'
console.log(versionControl('2.0.1', '2.0.1')); //'2.0.1' (equal)
console.log(versionControl('1.1.2', '1.1')); //'1.1.2'
console.log(versionControl('1.2.2', '1.3')); //'1.3'
console.log(versionControl('12.0.1.0', '12.0.1')); //'12.0.1' (equal)
console.log(versionControl('12.0.1', '12.0.1.1.0')); //'12.0.1.1.0'
