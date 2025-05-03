// Given 2 sorted arrays, merge and return one sorted array
// divide and conquer

//recursive calls [1,3,5,19,2,4]
//[1,3,5]
//[1],[3],[5]
//[1],[3,5]
//[1,3,5] = left
//[19,2,4] will repeat the above steps

//final call will be [1,3,5] [2,4,19] to sort and merge together

//
//O(n log(n)) space O(n) since not sorting in-place.
function merge(arr1, arr2) {
	let i = 0,
		j = 0;
	let result = [];
	while (i < arr1.length && j < arr2.length) {
		console.log(arr1, 'arr1');
		console.log(arr2, 'arr2');

		if (arr1[i] <= arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	// check to see which arr has hit the end;
	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}
	return result;
}

// refactor merge function
// function merge(arr1, arr2) {
//   let result = [];
//   while(arr1.length && arr2.length) {
//     if(arr1[0] < arr2[0]) {
//       result.push(arr1.shift())
//     } else {
//       result.push(arr2.shift())
//     }
//   }
//   //concate any left over elements from arr1 or arr2
//   return [...result, ...arr1, ...arr2];
// }

// divide part: keep splitting array til each value is in it's own array
// then call merge function to sort it individually and merge these two arrays together. Then sort again and merge
function mergeSort(arr) {
	//base case
	if (arr.length <= 1) return arr;

	let half = Math.floor(arr.length / 2); 

	let left = mergeSort(arr.slice(0, half));
	let right = mergeSort(arr.slice(half));
	// console.log(left, 'left');
	// console.log(right, 'right');

	return merge(left, right);
}

// console.log(mergeSort([1,5,3,19,4,2,6]));
// console.log(mergeSort([1, 3, 5]));
// console.log(mergeSort([99, 1, 22, 111, 100]));
// console.log(mergeSort([]));
