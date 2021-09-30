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
//       sum = `${digitsSum % 10}${sum}`;
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
  const AL = A.length
  const BL = B.length
  const ML = Math.max(AL, BL)

  let carry = 0, sum = '', result = '';

  for (let i = 1; i <= ML; i++) {
    // console.log(carry, +A.charAt(AL - i), +B.charAt(BL - i) );
    
    let sum = carry + +A.charAt(AL - i) + +B.charAt(BL - i) 
    console.log(sum);
    
    //sum % 10 => will yield the right most digit. 12%10 = 2
   result = sum % 10
   console.log(result);
   
    
    //only care about if carry is 10 or bigger 
    carry = Math.floor(sum/10)

    
    
  }
  console.log(carry);
if(carry) { result = carry.toString() + result}
  
return result;
}
// var addStrings = function(num1, num2) {
//   let carry = 0,
//       result = "",
//       i1 = num1.length - 1,
//       i2 = num2.length - 1;
  
//   while(i1>=0 || i2>=0){
//       const val1 = num1[i1--] || 0;
//       const val2 = num2[i2--] || 0;
//       console.log('val1=',val1, 'val2=',val2, 'carry=', carry);
      
//       const sum = +val1 + +val2 + carry;
//       console.log(sum);
      
//       // result = sum % 10 + result;
//       // console.log();
      
//       carry = Math.trunc(sum / 10); 
//   }


//   if(carry) result = carry + result;
  
//   return result
// };

console.log(add('9', ' 44'));
// console.log(add('9333852702227987', '85731737104263'));
