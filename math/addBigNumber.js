function addStrings(num1, num2) {
  let result = 0;
  if(num1.indexOf('e') !== -1) {
      num1 = parseFloat(num1);
      result = num1 * 10 ** parseFloat(num2)
      console.log('asdfs');
      
  } else {
     result = parseFloat(num1) + parseFloat(num2) 
  }
return result + '';
}

// var addStrings = function(num1, num2) {
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//   let carry = 0;
//   let sum = '';
   
//   for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
//       const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
//       console.log(i);
      
//       console.log(digit1);
//       console.log(num1.charAt(i) - '0');
      

//       const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
//       console.log(digit2);
//       const digitsSum = digit1 + digit2 + carry;
//       console.log(digitsSum, typeof digitsSum);
      
//       sum = digitsSum % 10 + sum;
//       console.log(typeof sum);
//       console.log(sum);
      
//       carry = Math.floor(digitsSum / 10);
//       console.log(carry);
//   }

//   return sum;
// };


// console.log(addStrings("9333852702227987", "85731737104263")) //9419584439332250"
// console.log(addStrings("9", "8"))

// console.log(addStrings('2e', '32'))
// console.log(addStrings('3e', '32'))
// console.log(addStrings('3.2', '3.33'))
function add(A, B) {
  let l1 = A.length-1;
  let l2 = B.length-1;

  let carry = 0, sum = '', result = '';

  while(l1 >= 0 || l2 >=0 || carry > 0) {
    let dig1 = +A.charAt(l1--) 
    let dig2 = +B.charAt(l2--) 
    console.log(dig2);
    
    let sum = carry + dig1 + dig2
    console.log(sum);
    
    // sum % 10 => will yield the right most digit. 12%10 = 2
    
   result = sum % 10 + result
   console.log(result);
   console.log(typeof result);
    // only care about if carry is 10 or bigger 
    carry = Math.floor(sum/10) 
    console.log(carry);
  }

if(carry) { result = carry + result}
  
return result;
}

console.log(add('9', '63'));
console.log(add("9333852702227987", "85731737104263"))

