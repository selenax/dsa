// Write a function called sumZoro which accepts a sorted array of integers. The function should 
// find the first pair where the sum is 0. Return an array that includes both 
// values that sum to zero or undefined if a pair does not exist

// O(n)
function sumZero(arr) {
  // start pointer from index 0 and last index
  // start should < end to avoid double counting
  // check to see if sum is zero, if matched, return nums in array 
  // if sum is greater than 0; last index move one place over to right
  // if sum is less than 0, start index need to increase, move one place to left 
  // if no match at end of loop, it will auto return undefined 

  let start = 0;
  let end = arr.length-1;

  while(start < end) {
    let sum = arr[start] + arr[end]
    if(sum === 0) {
      return [arr[start], arr[end]]
    } else if(sum < 0) {
      start++
    } else {
      end--
    }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3,4,5]));
console.log(sumZero([-4,-1,0,4,5]));
console.log(sumZero([1,2,3]));
