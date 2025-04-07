// 231. Power of Two
// Easy
// Topics
// Companies: Google, MS
// Given an integer n, return true if it is a power of two. Otherwise, return false.

//NOTE: An integer n is a power of two, if there exists an integer x such that n == 2^x.

// Input: n = 1
// Output: true
// Explanation: 2^0 = 1

// Input: n = 16
// Output: true
// Explanation: 2^4 = 16

// Input: n = 3
// Output: false

//ALGORITHM: Time: O(log N) - divide by 2
//keep dividing by 2 with quotient becoming next dividend until it's no longer divisible by 2
//if the last value we get is 1, that means it's power of 2 because the final dividend of any power of 2 is 2. so 2/2 = 1
// 8/2=4
// 4/2=2
// 2/2=1
const isPowerOfTwo = (n) => {
	// 2^0=1, therefore 1 is the smallest value for n
	if (n <= 0) return false;
	// if it's divisible by 2, keep dividing
	while (n % 2 == 0) {
		n = n / 2;
	}
	//if 1 is the final quotient, then we have a match as the final dividend 2 / 2 = 1;
	return n == 1;
};

//ALGORITHM: Time: O(1) static function using 1 arithmetic operation
//NOTE: Math.log2() return base 2 log of any #; return false if answer is not whole number as all power of 2 should be divisible by 2
//same result using Math.log(n)/Math.log(2) - where Math.log() uses nature logarithm where e = 2.718
const isPowerOfTwo2 = (n) => {
	if (n <= 0) return false;
	return Number.isInteger(Math.log2(n));
};

//ALGORITHM: Time: O(1) - isolate rightmost 1-bit
//NOTE: Two's complement: -x = ~x + 1; method used representing positive, negative, zero in binary, most significant bit indicate the sign (0 = positive, 1 = negative)
// Negative #'s are found by inverting all the bits and adding 1 to the rightmost bit
const isPowerOfTwo3 = (n) => {
	//return false if n is negative or equal to 0
	if (n <= 0) return false;
	// uses two's complement method to turn n into it's negative binary representation
	// bitwise AND turns 1 if both bits are 1
	// this operation isolated the rightmost 1-bit, results in x itself, since a power of 2 contains just one 1-bit, followed by some zeros
	// 2 = 10, 4 = 100, 8 = 1000
	// (Other numbers have more than 1-bit in their binary representation and hence for them x & (-x) would not be equal to x itself)
	return (n & -n) == n;
};

//ALGORITHM: Time: O(1) - turn off rightmost 1-bit
const isPowerOfTwo4 = (n) => {
	//lowest power of 2 is 1
	if (n <= 0) return false;
	// subtract 1 means change rightmost 1-bit to 0.
	// AND operator: the rightmost 1-bit will be turned off because 1 & 0 = 0;
	// power of 2 has one 1-bit, hence result is 0;
	/* 	  		100
	100-1= 		011 
	bitwise AND	---
				000
	*/
	return (n & (n - 1)) == 0;
};

console.log(isPowerOfTwo(2147483648));
// console.log(isPowerOfTwo4(8));
// console.log(isPowerOfTwo2(536870912));
// console.log(isPowerOfTwo3(0));
