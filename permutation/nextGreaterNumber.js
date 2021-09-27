// How can you get the next greater number with the same set of digits?
// For example, suppose the input is 423862, then the biggest number with these digits is 426238.


// !ie if not working with same set of digits: 34681 => next greater is 34682 
  // so it make sense to start from right to left 

// O(N)
function nextGreaterNumber(num) {
//check from right to left for descending order
  //find index that's out of order
  //compare right chunk of digits to find smallest digit greater than curr index
  //swap digit with current index
  //return num
  let currIndex = 0;
  let currVal = '';
  let str = num.toString().split('');
  
  for(let x = str.length-1; x > 0; x--) {
    if(str[x-1] < str[x]) {
      currIndex = x-1;
      currVal = str[x-1];
      largestSubIndex = x;
      break;
    }

}
//all digit are descending, nothing to swap for next greater value 
if(!currIndex) return -1 

let nextIndex = largestSubIndex;

for(let y = str.length-1; y > currIndex; y--) {
if(str[y] > currVal && str[y] < str[nextIndex]) {
  nextIndex = y;   
  }
}

let temp = str[currIndex];
str[currIndex] = str[nextIndex];
str[nextIndex] = temp;

return Number(str.join(''))
}

console.log(nextGreaterNumber(12531)); //13521
console.log(nextGreaterNumber(54321)); //-1
console.log(nextGreaterNumber(534976)); //536974
