// Given two strings, write a function to determine if the second string is an angram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.

// Q's to ask:
// does cases matter? 
// what about spaces? 

//O(n)
function validAnagrams(str1, str2) {
  if(str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for(let x of str1) {
    obj1[x] = ++obj1[x] || 1;
  };

  for(let x of str2) {
    obj2[x] = ++obj2[x] || 1;
  };

  console.log(obj2);

  for(let char in obj1) {
    if(!(char in obj2)) {
      return false;
    }
    if(obj1[char] !== obj2[char]) {
      return false;
    }
  }
  return true;
}


console.log(validAnagrams('', ''));
console.log(validAnagrams('abc', 'cbaa'));
console.log(validAnagrams('awesome', 'swaosme')); //true

