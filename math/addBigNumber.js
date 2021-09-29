function addStrings(string1, string2) {
  let result = 0;
  if(string1.indexOf('e') !== -1) {
      string1 = parseFloat(string1);
      result = string1 * 10 ** parseFloat(string2)
  } else {
     result = parseFloat(string1) + parseFloat(string2) 
  }
return result + '';
}


console.log(addStrings('2e', '32'))
console.log(addStrings('3.2', '3.33'))