// reverse string

// ALGORITHM 1: Two Pointers
// TIME:O(N) SPACE:O(N)
const reverseStr = (str) => {
	// split str into array
	// initialize left and right pointer at 0 and last index
	// while left < right
	// swap left w/ right, so first value become the last value, and last became the first
	// move pointers inwards, left++, right--

	let arr = str.split('');
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		// swap by destructure assignment
		[arr[left], arr[right]] = [arr[right], arr[left]];

		left++;
		right--;
	}
	// join array back to string;
	return arr.join('');
};

// AlGORITHM 2: Stack
// TIME:O(N) SPACE:O(N)
const reverseStr2 = (str) => {
	// split string into array
	let stack = str.split('');

	// create newStr to accum char
	// while loop runs til stack has no more length
	// pop last char from stack, add to newStr
	let newStr = '';
	while (stack.length) {
		newStr += stack.pop();
	}
	return newStr;
	//return newStr
};

// ALGORITHM 3: Reduce
// TIME:O(N^2) - string concatenation is O(N) inside reduce loop O(N)
// SPACE:O(N)
const reverseStr3 = (str) => {
	return str.split('').reduce((accum, curr) => curr + accum, '');
};

console.log(reverseStr3('abcd')); //dcba
console.log(reverseStr3('abc')); //cba
