// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// A simple approach is to do a linear search. The time complexity of the above algorithm is O(n). 
// Another approach to perform the same task is using Binary Search. 
// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
// Begin with an interval covering the whole array. 
// If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
// Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

// O(log n)
function binarySearch(arr, k) {
  //divide arr in half to find midpoint - math floor 
    //check to see if target = to midpoint, return index if matched
      //else if target is bigger than midpoint
        //start = midpoint, end = arr.length - 1
      //else target is smaller than midpoint 
        //start = 0, end = midpoint
    //else no match found, return -1  
    let start = 0;
    let end = arr.length-1;
    while(start <= end) {
      let mid = Math.floor((start + end)/2)
      if(arr[mid] === k) {
        return 
      } else if (arr[mid] < k) {
        start = mid + 1;
      } else if(arr[mid] > k) {
        end = mid - 1 ;
      } 
    }
    return -1
}

// refactor
function binarySearch(arr, k) {
  let start = 0, end = arr.length - 1;
  let mid = Math.floor((start + end)/2)

  while(start <= end && arr[mid] !== k) {
    if(arr[mid] > k) {
      end = mid - 1;
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end)/2)
  }
  return arr[mid] === k ? mid : -1;
}

// refactor - recursion O(log n)
function binarySearch(arr, k) {
  function search(arr, k, start, end) {
    if(start <= end) {
      let mid = Math.floor((start + end)/2)
      if(arr[mid] === k) return mid;
      if(arr[mid] < k) {
        return search(arr, k, start = mid + 1, end)
      }
      if(arr[mid] > k) {
        return search(arr, k , start, end = mid - 1)
      }
    }
      return -1;
  }
  return search(arr, k, 0, arr.length-1)
}

                         //0,1,2,3,4,5 len = 6
console.log(binarySearch([-1,0,3,5,9,12], 2));
console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11], 33));
console.log(binarySearch([-1,0,3,5,9,12], 13));
console.log(binarySearch([-1,0,3,5,9,12], 5));
