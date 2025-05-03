// 153. Find Minimum in Rotated Sorted Array - Medium

// const findMin = (nums) => {
//     //initialize pointers 
//     let left = 0, right = nums.length-1;

//     while(left < right) {
//         //base case: 
//         //if nums[0] < nums[len-1] meaning it's already sorted
//         if(nums[left] < nums[right]) return nums[left]

//         //find mid value; 
//         let mid = Math.floor((left + right)/2)

//          // mid > r, pivot is on the right, update left = mid+1
//          if(nums[mid] > nums[right]) {
//             left = mid + 1
//         // else mid <= n[0], pivot = left half, update right = mid;
//          } else {
//             right = mid;
//          }
//     }
//     return nums[left]
// }



/*
lo hi
[3,2]
   lr

 [3,1,2] 
  s m e
    s
*/   
const findMin = arr => {
//use 2 point initially pointing them at first and last element, start and end, respectfully

//modified binary search: 
//while start < end 
    // base case: arr[s] < arr[e] return arr[s]
    // find mid value 
    // mid > end, start = mid + 1 
    // else, s = mid;
let start = 0, end = arr.length-1;

while(start < end) {
    if(arr[start] < arr[end]) return arr[start];

    let mid = Math.floor((start + end)/2);

    if(arr[mid] > arr[end]) start = mid + 1; 
    else start = mid;

}
return arr[start]

}


console.log(findMin([3,4,5,1,2]));
