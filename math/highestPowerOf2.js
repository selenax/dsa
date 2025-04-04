/*
Given a number n, find the highest power of 2 that is smaller than or equal to n.

Input : n = 10
Output : 8

Input : n = 19
Output : 16

Input : n = 32
Output : 32

Application Problem: 
Some people are standing in a queue. A selection process follows a rule where people standing on even positions are selected. Of the selected people a queue is formed and again out of these only people on even position are selected. This continues until we are left with one person. Find out the position of that person in the original queue. 
Print the position(original queue) of that person who is left. 

Input: n = 10
Output:8
Explanation : 
1 2 3 4 5 6 7 8 9 10  ===>Given queue
    2 4 6 8 10
       4 8
        8

Input: n = 17
Output: 16
Explanation : 
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17  ===>Given queue
        2 4 6 8 10 12 14 16
            4 8 12 16
              8 16
               16
*/



//ALGORITHM: TIME: O(1)
const nearestPowerOfTwo = function(n) {
  //Math.log2 return base 2 log of any number meaning it returns the exponent in 2^exponent = n;
  let exp = Math.floor(Math.log2(n))  
  return Math.pow(2, exp)
}

//ALGORITHM: Time: O(N)
function highestPowerof2(n) {
	let res = 0;
	for (let i = n; i >= 1; i--) {
 //two's complement and bitwise AND results in turning rightmost 1-bit off. Since a power of 2 has only 1 bit, we would get 0
		if ((i & (i - 1)) == 0) {
			res = i;            
			break;
		}
	}
	return res;
}



// console.log(highestPowerof2(10)); //8
// console.log(highestPowerof2(19)); //16
// console.log(highestPowerof2(32)); //32
console.log(nearestPowerOfTwo(10)); //8
// console.log(nearestPowerOfTwo(19)); //16?
// console.log(nearestPowerOfTwo(32)); //32

