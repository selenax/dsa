1.23e4;
//www.geeksforgeeks.org/floating-point-number-precision-in-javascript/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https: function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

//!!!!!!!
console.log(financial('1.23e+5'));
// Expected output: "123000.00"
