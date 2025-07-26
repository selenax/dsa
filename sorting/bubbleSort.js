// Can You Sort With Adjacent Swaps?
// You are given an array of integers. You are allowed to swap any two adjacent elements any number of times.
// Return true if it's possible to sort the array in non-decreasing order using only adjacent swaps.

// Input: [3, 1, 2]
// Output: true
// Explanation:
// Swap 3 and 1 → [1, 3, 2]
// Swap 3 and 2 → [1, 2, 3]

// Input: [1, 5, 3, 4, 2]
// Output: true
// Explanation:
// Swap 5-3, then 5-4, then 5-2, etc.

/* 
1. initialize `swapped` as a flag to track if any two values were swapped during a pass
2. if no swaps occur in a full pass, the array is sorted and we can exit 
3. after each pass, the largest unsorted value is guaranteed to bubble up (take position of higher index) to its correct position at the end
4. so we can reduce the range n-- to avoid checking the already sorted elements in the end
5. restart the loop again while swapped is true b/c array may still be unsorted

Time: O(n^2)
Space: O(1)
*/
const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr; // edge case

  let n = arr.length;
  let swappped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return arr;
};

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([1, 5, 3, 4, 2]));
console.log(bubbleSort([4, 6, 7, 5, 6, 5, 4, 1]));
