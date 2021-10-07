// Given 2 sorted arrays, merge and return one sorted array


//O(n log(n)) space O(n)
function merge(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++ 
    } else {
      result.push(arr2[j])
      j++;
    }
  }
  // check to see which arr has hit the end;
  while(i < arr1.length) {
    result.push(arr1[i]);
    i++
  } 
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++
  }
  return result;
  }




function mergeSort(arr) {

}



console.log(mergeSort([1,3,5], [2,4,5,6]));
console.log(mergeSort([1,10,50], [2,14,99,100]));
console.log(mergeSort([], [2,14,99,100]));


