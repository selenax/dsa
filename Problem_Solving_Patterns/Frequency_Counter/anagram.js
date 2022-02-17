// given 2 strings, determine if 2nd string is anagram of the first.
// anagram is a word/phrase formed by rearranging letters of another (ex: iceman -> cinema)

//! O(3N) => O(N)
// function anagram(str1, str2) {
//   if(str1.length !== str2.length) return false;
//   let newStr1 = countChar(str1);
//   let newStr2 = countChar(str2);

//   for(let key of newStr1) {
//     if(!(key in newStr2)) {
//       return false;
//     } 
//     if(newStr2[key] !== newStr1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function countChar(str) {
//   let obj = {};

//   for(let char of str) {
//     obj[char] = ++obj[char] || 1
//   }
//   return obj
// }

//! O(2N) => O(N)
function anagram(str1, str2) {
  let lookup = {};

  for(let char of str1) {
    lookup[char] = ++lookup[char] || 1;
  }

  for(let char of str2) {
    // if key don't exist or value is 0 then it's not an anagram (since can't deduct from 0 and iteration isn't finish yet)
    if(!lookup[char]) return false; 
    else {
      lookup[char]--;
    }
  }
  return true;
}

console.log(anagram('aaz', 'zza')); //false
console.log(anagram('anagram', 'nagaram')); //true

// a: 0
// n: 0
// g: 0
// r: 0
// m: 0
