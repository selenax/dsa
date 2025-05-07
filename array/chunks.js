// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// ALGORITHM TIME:O(N) SPACE:O(N)
const chunks = (arr, size) => {
	let subArray = [];
	let result = [];
	for (let x = 0; x < arr.length; x++) {
		//push element in subarray
		subArray.push(arr[x]);
		//once size met, push to result, reset subArray to empty array
		if (subArray.length === size) {
			result.push(subArray);
			subArray = [];
		}
	}
	//remaining elements that doesn't meet the size condition
	if (subArray.length !== 0) {
		result.push(subArray);
	}
	return result;
};

// refactor
const chunks2 = (arr, size) => {
	let result = [];
	//increment x by size
	for (let x = 0; x < arr.length; x += size) {
		//slice by size and push subarray to result
		result.push(arr.slice(x, x + size));
	}
	return result;
};

console.log(chunks(['a', 'b', 'c', 'd'], 2)); //[["a", "b"], ["c", "d"]].
console.log(chunks([0, 1, 2, 3, 4, 5], 3)); //[[0, 1, 2], [3, 4, 5]].
console.log(chunks([0, 1, 2, 3, 4, 5], 2)); //[[0, 1], [2, 3], [4, 5]].
console.log(chunks([0, 1, 2, 3, 4, 5], 4)); //[[0, 1, 2, 3], [4, 5]].
console.log(chunks([0, 1, 2, 3, 4, 5, 6], 3)); //[[0, 1, 2], [3, 4, 5], [6]].
console.log(chunks2([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); //[[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log(chunks2([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]].
