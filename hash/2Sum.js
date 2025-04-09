// EASY: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// function twoSum(arr, target) {
//   let hash = {};
//   for(let x = 0; x < arr.length; x++) {
//     let diff = target - arr[x];
//     if(hash[arr[x]] !== undefined) {
//       return [x, hash[arr[x]]];
//     } else {
//       hash[diff] = x;
//       console.log(hash);
//     }
//   }
// }

//ALGORITHM: TIME:O(N^2) - nested loops; SPACE:O(1)
const twoSum = (arr, target) => {
	//using 2 for loops to check for every possible sum
	//if matched target, return those indices
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) return [i, j];
		}
	}
};

//ALGORITHM: TIME:O(N) - forLoop & hashMap; SPACE:O(N)
const twoSum2 = (arr, target) => {
	//initialize hashmap to store values for lookup
	//iterate array using for loop
	//store the diff:target - currValue, if next value = diff, we have a match
	  //hash[diff] = i
	//if arr[i] is found in the hash,return [ currIndex, hash[arr[i]] ] for the previous saved index
	let hash = {};

	for (let i in arr) {
		let diff = target - arr[i];

		if (hash.hasOwnProperty(arr[i])) return [hash[arr[i]], i];
		else hash[diff] = i;
	}
};

//! What if theres more than 1 pair of answer
/*
  i= 0 1 2 3
    [2,2,3,4,4] k=6

    6-2=4 {4:[0,1]}
    6-3=3 {3:[3]}
    
    TODO - return smallest indices (THIS WAS INTERVIEWED)
    if key found in hash, we know that there's an array with at least 1 index
    if(hash[diff] !== undefined) {
      return [currIndex, hash[diff][0]]
    }
    TODO - return all pairs 
    initialize empty array to store result
    if key is found and arr.len !== 0 
    result.push([currIndex, hash[diff].pop()])
*/

// console.log(twoSum([1,2,3,4], 7)); //[2,3]
// console.log(twoSum([2,7,11,15], 9)); //[0,1]
// console.log(twoSum([3,2,4], 6)); //[1,2]
// console.log(twoSum([3,3], 6)); //[0,1]
// console.log(twoSum2([1, 2, 3, 4], 7)); //[2,3]
