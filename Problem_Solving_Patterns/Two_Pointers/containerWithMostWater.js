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

// given an array of elements that rep the height (y-axis) at each index (x-axis)
// find 2 lines on x-axis to form container that will hold most water
// area = w*l

const maxArea = (height) => {
	let max = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		const width = right - left; // base of container

        // choosing the shorter height to make sure it won't slant
		const area = Math.min(height[left], height[right]) * width; 

		max = Math.max(max, area);

		// move the pointer at the shorter line inward
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max;
};
