// reverse string using 2 pointer

/*
1. strings are primitive value hence immutable; in order to manipulate, first split string into array 
2. initalize 2 pointer, l & r, 0 and last index respectfully
3. while l < r, swab l & r at each pass
    - l++, r--
4. join array back to join and return 

basecase:
1. str.len <= 1, return str;

Time: O(N) - split(), while loop, join(), each run in linear time; but since not nested, it's O(3N) and simplified to O(N)
Space: O(N) - copied into array
*/

const reverseStr_twopointer = (str) => {
  if (str.length <= 1) return str;

  let res = str.split('');

  let l = 0,
    r = str.length - 1;

  while (l < r) {
    [res[l], res[r]] = [res[r], res[l]]; // array destructure assignment
    l++;
    r--;
  }
  return res.join('');
};

console.log(reverseStr_twopointer('abcd')); // even length
console.log(reverseStr_twopointer('abcde')); // old length
console.log(reverseStr_twopointer(''));
