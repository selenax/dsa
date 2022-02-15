
// only account for alphanumberic values + case insensitive 
const characterFrequency = (str) => {
  let obj = {};

  for(let char of str) {
    char = char.toLowerCase();
    // regex performance differs base on browser, faster to use unicode 
    // if(/[a-z0-9]/.test(char)) {
    if(validateChar(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj
}

function validateChar(char) {
  let index = char.charCodeAt();
  if((index > 47 && index < 58) || (index > 96 && index < 123)) {
    return true
  }
  return false;
}
console.log(characterFrequency("he SHe! 122"))
// console.log(characterFrequency('mississippi')); 
// console.log(characterFrequency('popopo'))
// console.log(characterFrequency('mmmaaaiiibbb'))
