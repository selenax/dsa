// Function accepts 2 arrays. Should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same. 

// Question to ask:
// does order matter in second array?
// frequncy as in the count of number in arr1 should be same in arr2?
// are values all numbers? 
// return false if not the same? 

// O(n^2) - Quadractic 
  // for loop + includes 
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;

  for(let x of arr1) {
    if(!arr2.includes(x ** 2)) return false;
  }
  return true;
}

console.log(same([1,2,3], [9,4,1]));

