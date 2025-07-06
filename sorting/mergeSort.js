// Given array, sort and return new array

// divide and conquer
// key: recursively split array until each subarray has 1 element, then sort and merge as recursion call returns
// base case: if arr len is <= 1, return arr

/* 

1: break & merge 
	- base case: return if arr has 1 or 0 elements
	- recursively divide array in half, left and right
	- call sorting helper on both and merge them at every level

2: sort 
	- create a result array
	- use two pointers (i and j) for left and right halves
		- while both pointers are in bounds:
			- compare values; push smaller one; increment pointer
	- push remaining elements from either side
	- return merged result 
*/

//ALGORITHM: Recursion
//TIME:O(n log n) - O(log n) as each recursive call divides arr in half; then O(n) for merge
//SPACE: O(n)
const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	let half = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, half));
	let right = mergeSort(arr.slice(half));

	return merge(left, right);
};

// helper function
function merge(arr1, arr2) {
	let result = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i++]);
		} else {
			result.push(arr2[j++]);
		}
	}
	// append any remaining elements from arr1 or arr2
	return result.concat(arr1.slice(i), arr2.slice(j));
}

console.log(mergeSort([1, 5, 3, 19, 4, 2, 6]));
console.log(mergeSort([1, 3, 5]));
console.log(mergeSort([99, 1, 22, 111, 100]));
console.log(mergeSort([]));
