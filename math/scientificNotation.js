// write a function interpret 1e-5 in number form

/* 
ask clarifying questions

1. is this a str or number? (console.log 1e-5 as number returns 0.0005)

2. what does that equal to or can i check to see what it returns in the console
      -  answer: 0.0001 
          - follow up: how did you get that answer
              - answer: 1 times 10 to the power of -5 or 1 * 10^-5
*/

// method 1: using built in Number() for type conversion
const scientificNotation = (str) => {
  return Number(str);
};

// method 2: manual parsing
const scientificNotation2 = (str) => {
  // split string at e, convert to lower case because 'E' is also value (1E-5)
  const [baseStr, expStr] = str.toLowerCase().split('e'); //

  // parse string to number
  const base = parseFloat(baseStr); //
  const exponent = parseInt(expStr, 10);

  // fomula: base * 10^exponent
  let val = base * Math.pow(10, exponent);

  // * caveat: JS uses 64 bit floating-point math, so instead of returning .0001  JS will return .0000999999999
  
  // both methods below return exact answer

  return Number(val.toFixed(10));  // or 
  // return Number(val.toPrecision(10));
 
};

console.log(scientificNotation2('1e-5')); // 0.0001
console.log(scientificNotation2('2.5e2')); // 250
