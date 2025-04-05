// 153. Find Minimum in Rotated Sorted Array - Medium



//   0           (n-1)
// [left < mid < right]
//  smallest          biggest 

const findMin = (nums) => {
    //initialize pointers 
    let left = 0, right = nums.length-1;

    while(left < right) {
        //if nums[0] < nums[len-1] meaning it's already sorted
        if(nums[left] < nums[right]) return nums[left]

        //find mid value; 
        let mid = Math.floor((left + right)/2)

         // mid > r, pivot is on the right, update left = mid+1
         if(nums[mid] > nums[right]) {
            left = mid + 1
        // else mid <= n[0], pivot = left half, update right = mid;
         } else {
            right = mid;
         }
    }
    return nums[left]
}


console.log(findMin([3,4,5,1,2]));
