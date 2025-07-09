✅ When to Use Two-Pointer Algorithm

Look for problems with these traits:

1. Sorted Array (or can be sorted)
   The array is already sorted or you can sort it without violating constraints.

Sorting enables logical movement of pointers (left/right) based on value comparisons.

Example:

Find two numbers that sum to a target — use one pointer at start, one at end, move inward.

2. You Need to Find Pairs or Triplets
   Problems ask for combinations (pairs, triplets) with a condition (sum, difference, etc.)

Example:

Find all triplets where a + b + c = 0 → Fix one number, then use two-pointer for the rest.

3. Optimizing Search Within a Range
   You want to reduce O(n²) brute force down to O(n) by scanning intelligently.

Example:

Find closest pair to a target sum → adjust pointers based on how close/far you are.

4. Window or Range-Based Logic
   You’re working with subarrays, intervals, or trying to maximize/minimize something.

Example:

Longest subarray with at most k distinct elements → move two pointers (sliding window style).

🚫 When NOT to Use Two-Pointer
If the array is unsorted and sorting is not allowed (e.g., you need indices as-is).

If you’re dealing with unordered sets (hashmaps or graphs).

If the condition depends on non-monotonic behavior — i.e., you can't predict how the sum will change by moving pointers.

💡 Tip:
After sorting an array, if you're using two nested loops, ask yourself:

Can I replace the inner loop with a pointer moving inward based on some condition?

If yes, it’s likely a good two-pointer candidate.
