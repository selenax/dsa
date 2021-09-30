
// adding numbers with char
function addNum(num1, num2) {
  let result = 0;
  if(num1.indexOf('e') !== -1) {
      num1 = parseFloat(num1);
      result = num1 * 10 ** parseFloat(num2)      
  } else {
     result = parseFloat(num1) + parseFloat(num2) 
  }
return result + '';
}

console.log(addNum('2e', '32'))
console.log(addNum('3e', '32'))
console.log(addNum('3.2', '3.33'))


/* --------------------------------- */

// adding strings with no char
function addStrings(num1, num2) {
  let l1 = num1.length-1;
  let l2 = num2.length-1;

  let carry = 0, sum = '', result = '';

  while(l1 >= 0 || l2 >=0 || carry > 0) {
    //convert each char to digit
    let dig1 = +num1.charAt(l1--) 

    let dig2 = +num2.charAt(l2--) 

    let sum = carry + dig1 + dig2

    // sum % 10 => will yield the right most digit. if 12%10 = 2, storing 2 in result
    result = sum % 10 + result
    
    //accumlate result one digt at a time.

    // only care about if sum that is 10 or bigger so can carry the 1 to add back in next iteration
    carry = Math.floor(sum/10) 
  }
  if(carry) { 
    result = carry + result
  }
return result;
}

console.log(addStrings('9', '2255'));
console.log(addStrings("9333852702227987", "85731737104263"))
console.log(addStrings("34", "27"))
console.log(addStrings('941958443933225232', '524423423423343'));
