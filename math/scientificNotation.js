// write a function interpret 1e-10 in number form

// ask clarifying questions

// 1 times 10 to the power of -10

// method 1: using built in Number() for type conversion
const scientificNotation = (str) => {
  return Number(str);
};

// method 2: manual parsing
const scientificNotation2 = (str) => {
  const [baseStr, expStr] = str.toLowerCase().split('e'); // 1E-4 is also valid

  const base = parseFloat(baseStr); // 2.5e2
  const exponent = parseInt(expStr, 10);

  let val = base * Math.pow(10, exponent);

  // JS uses 64 bit floating-point math, so instead of returning .0001  JS will return .0000999999999
  // both of the following methods below rounds and trim trailing zeros

  return Number((+str).toPrecision(10)); // return Number(val.toFixed(10))
};

console.log(scientificNotation2('1e-5')); // 0.0001
console.log(scientificNotation2('2.5e2')); // 250
