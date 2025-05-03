// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// A simple approach is to do a linear search. The time complexity of the above algorithm is O(n).
// Another approach to perform the same task is using Binary Search.
// Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
// Begin with an interval covering the whole array.
// If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
// Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

// O(log n)
// function binarySearch(arr, k) {
//   let start = 0, end = arr.length - 1;
//   let mid = Math.floor((start + end)/2)

//   while(start <= end && arr[mid] !== k) {
//     if(arr[mid] > k) {
//       end = mid - 1;
//     } else {
//       start = mid + 1
//     }
//     mid = Math.floor((start + end)/2)
//   }
//   return arr[mid] === k ? mid : -1;
// }

// recursion O(log n)
function binarySearch(arr, k) {}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); //-1
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11)); //11
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 13)); //-1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 5)); //3
