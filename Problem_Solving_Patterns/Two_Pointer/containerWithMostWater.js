// Leetcode #11: Container With Most Water
// Medium
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the line i are at (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container that holds the most water.

// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
//-------------------------//

/*
- input: [] = integers representing height
- goal: find max area of water a container can hold using 2 lines 
    - width is distance between 2 indices (right - left)
    - length is shorter of the 2 lines to avoid slant
- edge case:
    1. [] return 0
- output: integer

Algorithm: 2 Pointer
Time: O(N)
Space: O(1)
 */

const maxArea = (height) => {
  // use 2 pointers: left and right to represent a container
  // move left towards right if left < right b/c we want find the next taller height, vice versa
  // record max area using l * w,
  // length: use smaller value for 2 height due to slant constraint
  // width: difference between left and right indices; right - left
  if (height.length === 0) return 0;
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const area = Math.min(height[left], height[right]) * width;

    max = Math.max(area, max);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
