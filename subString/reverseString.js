// reverse string

// ALGORITHM 1: Two Pointer
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

console.log(reverseStr('abcd')); //dcba
