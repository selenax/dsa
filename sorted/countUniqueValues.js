// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted. 

function countUniqueValues(arr) {
  
  // start with i = 0 and j = 1;
  // iterate array, if i = j, move j one over,
  // else if i != j, move i over 1, set i = j

  let i = 0;
  let j = 1;
  if(!arr.length) return 0;
  while(j < arr.length) {
    if(arr[i] !== arr[j]) {
      i++; 
      arr[i] = arr[j];
    }
    j++;
  }
  return i+1;
}


console.log(countUniqueValues([1,1,1,2,2,2])); //2
console.log(countUniqueValues([1,2,3,4,5,6])); //6
console.log(countUniqueValues([-3,-2,-1,0,0,1])); //5
console.log(countUniqueValues([])); //0

