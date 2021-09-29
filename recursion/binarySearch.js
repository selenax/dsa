// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// A simple approach is to do a linear search. The time complexity of the above algorithm is O(n). 
// Another approach to perform the same task is using Binary Search. 
// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
// Begin with an interval covering the whole array. 
// If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. 
// Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.


function binarySearch(arr, k) {
  //divide arr in half to find midpoint - math floor 
    //check to see if target = to midpoint, return index if matched
      //else if target is bigger than midpoint
        //start = midpoint, end = arr.length - 1
      //else target is smaller than midpoint 
        //start = 0, end = midpoint
    //else no match found, return -1  
    let start = 0;
    let end = arr.length;
    while(start <= end) {
      let mid = Math.floor((start + end)/2)
      console.log(mid);
      if(arr[mid] === k) {
        return mid;
      } else if (arr[mid] < k) {
        start = mid;
      } else if(arr[mid] > k) {
        end = mid;
      } else {
        return -1
      }
    }
}

console.log(binarySearch([0,1,2,3,4,6,7,8,9], 9));
