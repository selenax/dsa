// 33. Search in Rotated Sorted Array - Medium
// Search an element in a sorted and rotated array, return index of target or -1 if target not found.
// Google, Amazon

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// [10,20,1,3,6,7,8]

// find pivot value because that's where rotation occurs; partitions array into 2 sorted array
// if mid > n-1, pivot is on the right half; update start = mid + 1
// else mid <= n-1, pivot is on left half; update right = mid;
// start ~ pivot-1
// pivot ~ end
// binary search

//ALGORITHM: TIME: O(Log N) - worst case: 3 binary searches 
const search = (nums, target) => {
	let start = 0,
		end = nums.length - 1;

	while (start < end) {
		if (nums[start] < nums[end]) break;

		let mid = Math.floor((start + end) / 2);

		if (nums[mid] > nums[end]) {
			start = mid + 1;
		} else {
			// else nums[mid] <= nums[end] which is normal order
			end = mid;
		}
	}
	//nums[start] is now the pivot (smallest)
	//2 sorted arrays:
	//[0~pivot-1], [pivot~n-1]
	function binarySearch(start, end, target) {
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (nums[mid] === target) {
				return mid;
			} else if (nums[mid] > target) {
				//go smaller
				end = mid - 1;
			} else {
				//go bigger
				start = mid + 1;
			}
		}
		return -1;
	}

	let result = binarySearch(0, start - 1, target);
	// if result is -1, meaning target wasn't found on first half of array, hence search 2nd half from pivot to n-1
	// else target was found, return result
	return result === -1 ? binarySearch(start, nums.length - 1, target) : result;
};


//ALGORITHM: TIME: O(Log N) - 1 binary search
//process of elimination by comparing end values in sorted subarray before performing binary search in the subarray that may contain the target

/*
1. initialize pointers: 
    - start = 0
    - end = nums.length-1
2. Perform binary search:
    1 while start <= end
    2 find mid index
    ***
    case 1: mid index == target, return index

    case 2: start half is sorted (start <= mid)
        - if start <= target < mid, target is here: move END = mid - 1
        - else: search rotated half: move START = mid + 1

    case 3: end half is sorted 
        - if mid < target <= end, target is here: move START = mid + 1 
        - else: search rotated half: moved END = mid - 1
        
 3. return -1 if target was not found 
*/
const search2 = (nums, target) => {
    let start = 0, end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(nums[mid] === target) {
            return mid
        } else if(nums[start] <= nums[mid]) {
            if(nums[start] <= target && target < nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            if(nums[mid] < target && target <= nums[end]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return -1;
}



console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); //4
// console.log(search([3, 4, 5, 1, 2], 2)); //4
// console.log(search([3,1]), 3); //0
