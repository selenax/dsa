// Drop itPassed
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  let result = [];
  for(let x = 0; x < arr.length; x++) {
    if(func(arr[x])) {
      return arr.slice(x);
    }
  }
  return [];
}


// recursion

function dropElements(arr, func, x = 0) {
  return 0 < arr.length && !func(arr[x]) ?
    dropElements((arr.slice(x + 1)), func, x) : arr;
}


console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))