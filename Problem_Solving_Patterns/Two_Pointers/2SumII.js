// 167. Two Sum II - Input Array Is Sorted
// Medium
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

//ALGORITHM: TIME:O(N) SPACE:O(1)
var twoSum = function(numbers, target) {
    //use 2 indices, initially pointing at the first and last element
    //compare their sum to target, if sum = target, we found solution
      //if sum > target, decrease the larger index by 1 
      //if sum < target, increase the smaller index by 1 
      //move the dices and repeat the comparison until solution is found. 
    //[abcdef] //[ce]
         //because we are moving the small index from left to right, and large index from right to left, 
         //at one point or another, one of the pointers will get to c or e first. 
         //let's say the small index reaches c first. generally speaking the sum of these 2 elements will be bigger than our target. And based on our algorithm, we will move the larger index to the left until we reach the solution. 

         let lo = 0, hi = numbers.length-1;

         while(lo < hi) {
            let sum = numbers[lo] + numbers[hi];
            if(sum === target ) return [lo+1, hi+1]
            else if(sum > target) {
                hi--;
            } else {
                lo++
            }
         }
};