// 231. Power of Two
// Easy
// Topics
// Companies: Google, MS
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2^x.

// Input: n = 1
// Output: true
// Explanation: 2^0 = 1

// Input: n = 16
// Output: true
// Explanation: 2^4 = 16

// Input: n = 3
// Output: false

/* NOTE: 
Math.log2() return base 2 logarithm of a # whereas Math.log() calculates the natural logarithm where e = 2.718...
therefore Math.log(n)/Math.log(2) wouldn't return the same values.
*/

//Time: O(1) static(native) function

const isPowerOfTwo = (n) => {
    // return Math.log2(n)

}

console.log(isPowerOfTwo(536870912));