// Given 2 sorted arrays, merge and return one sorted array


//O(n log(n)) space O(n)
function mergeSort(arr1, arr2) {
  let i = 0, j = 0;
  let result = [];
  console.log(i);
  while(i <=arr1.length-1 || j <= arr2.length-1) {
    if(arr1[i] <= arr2[j]) {
      result.push(arr1[i], arr2[j])
    } else if(arr1[i] >= arr2[j]) {
      result.push(arr2[j], arr1[i])
    } else if(i === 0) {
      result.push(arr2.slice(j+1))
      break
    } else if(j === 0) {
      result.push(arr1.slice(i+1))
      break
    }
    i++;
    j++;
    }
    return result;
  }



console.log(mergeSort([1,3,5], [2,4,5,6]));
console.log(mergeSort([1,3,13,19], [2,3,5,29]));
