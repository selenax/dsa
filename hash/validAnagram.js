// Given two strings, write a function to determine if the second string is an angram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.

// Q's to ask:
// does cases matter? 
// what about spaces? 

// ! pre increment - before assigning the value to the variable, the value is incremented by one.
// ! post increment - after assigning the value to the variable, the value is incremented.
// sum = 0
// counter = 0;
// sum = (++counter)+(++counter)+(counter++)
// evaluates as

// sum = 0
// counter = 0
// For first ++counter
// counter = counter + 1
// sum = counter

// For second ++counter
// counter = counter + 1
// sum = sum + counter

// For first counter++
// sum = sum + counter
// counter = counter + 1



//O(n)
function validAnagrams(str1, str2) {
  if(str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};
  
  // pre increment - before assigning the value to the variable, the value is incremented by one.
  // post increment - after assigning the value to the variable, the value is incremented.
  for(let x of str1) {
    obj1[x] = ++obj1[x] || 1;
  };

  for(let x of str2) {
    obj2[x] = ++obj2[x] || 1;
  };

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

// refactor O(n)
function validAnagrams(str1, str2) {
  if(str1.length !== str2.length) return false;

  let hash = {};

  for(let char of str1) {
    hash[char] ? ++hash[char] : hash[char]=1
  }

  for(let char of str2) {
    // if no char return false;
    // also if at this iteration hash[char] = 0(there's letter in str2 that isn't in str1), 0 = false, and ! = not therefore not false = true
    if(!hash[char]) {
      return false;
    } else {
      hash[char]--;
    }
  }
return true;
}


console.log(validAnagrams('', ''));
console.log(validAnagrams('aac', 'acac'));
console.log(validAnagrams('awesome', 'waosmee')); //true

