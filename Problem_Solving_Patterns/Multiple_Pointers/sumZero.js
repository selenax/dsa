// accepts a sorted array of integers. 
// should find first pair where sum is 0
// return array that includes both values that sum to zero or undefined if pair does not exist

// //! brute force time:O(n^2) space:O(1)
// function sumZero(arr) {

//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
//   return undefined
// }


//! two pointers time:O(n) space:O(1)
function sumZero(arr) {
  let left = 0, right = arr.length - 1; 

  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]]
    } else if(sum < 0) {
      left++
    } else {
      right--;
    }
  }
  return undefined;
}
console.log(sumZero([-3,-2,-1,0,1,2,3])); //[-3,-3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1,2,3])); //undefined