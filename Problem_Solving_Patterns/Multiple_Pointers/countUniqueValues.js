// accepts a sorted array and counts the unique values in the array
// there can be negative numbers

//! time:O(N) space:O(1)
// function countUniqueValues(arr) {

//   if(arr.length < 2) {
//     return arr.length
//   };

//   let i = 0, j = i + 1, count = 1;
//   while(i <= j && j < arr.length) {
//     if(arr[i] === arr[j]) {
//       j++
//     } else {
//       count++;
//       i = j
//       j++
//     }
//   }
//   return count;
// }

//! time:O(N) space:O(1)
function countUniqueValues(arr) {

  // if arr length is empty or 1, just return the arr length 
  if(arr.length < 2) return arr.length;

  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    // as j iterates, i will only increase if j's a unique number
      // assign that unique number to i 
    // when j is done, i will tell us how many unique value there are
      // return i (+1 since we started at index 0)
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1; 
}
console.log(countUniqueValues([1,2,2,2])); //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4

