// //Given nested arrays, return all values in one single array;

// console.log(flattenArray([1, [2], [3, [[4]]]])); //[ 1, 2, 3, 4 ]
// console.log(flattenArray([[['a']], [['b']]])); //[ 'a', 'b' ]

// ALGORITHM: RECURSIVE
// TIME:O(N+D) SPACE:O(N+D); N=each recursive level; D=depth of nesting(# of callstacks)
const flattenArray = (arr) => {
	//inital empty array to store result;
	let result = [];
	//since arrays deeply nested, recursion can be used to dive into each one
	//create helper function to recurse until given paramenter is not an array
	//if arg is not an array, push arg to result
	//else, we have an array
	//loop over array, recurse on each item

	function checkArray(arg) {
		if (!Array.isArray(arg)) {
			result.push(arg);
		} else {
			for (let item of arg) {
				checkArray(item);
			}
		}
	}

	//loop over array and pass helper function to each item
	arr.forEach(checkArray);

	//return result;
	return result;
};

// ALGORITHM: RECURSIVE USING CONCAT
// TIME:O(N+D) SPACE:O(N+D); N=each recursive level; D=depth of nesting
const flattenArray2 = (arr) => {
	//concat flattens 1 level deep, so each call flattens 1 level
	let result = [].concat(...arr);

	//some() checks to see if another level of flatten is needed;
	//if some returns true, recurse over result
	//else no more array, return results
	return result.some(Array.isArray) ? flattenArray2(result) : result;
};

// console.log(flattenArray2([1, [2], [3, [[4]]]])); //[ 1, 2, 3, 4 ]
// console.log(flattenArray([[['a']], [['b']]])); //[ 'a', 'b' ]
// console.log(flattenArray([1, [], [3, [[4]]]])); // [1, 3, 4]
// console.log(flattenArray2([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]

// ALGORITHM: USING STACK
// TIME:O(N) SPACE:O(N)
const flattenArray3 = (arr) => {
	let result = [];
	// create copy to avoid mutation
	let stack = [...arr];

	while (stack.length > 0) {
		const current = stack.pop();
		if (Array.isArray(current)) {
			// add all items inside array using spread
			stack.push(...current);
		} else {
			result.push(current);
		}
	}

	// perserve original order since worked from back to front;
	return result.reverse();
};

// refactor
const flattenArray4 = (arr) => {
	let result = [];
	// create copy to avoid mutation
	let stack = [...arr];

	while (stack.length) {
		const current = stack.pop();
		Array.isArray(current) ? stack.push(...current) : result.push(current);
	}

	// elements were added in reverse order
	return result.reverse();
};

// ALGORITHM: USING QUEUE
// TIME:O(N) - best case: if each array item was only visited once; worst case:O(n^2): deeply nested, causing mulitiple reindexing
// SPACE:O(N)
const flattenArray5 = (arr) => {
	let result = [];
	// create copy to avoid mutation
	let stack = [...arr];

	while (stack.length) {
		const current = stack.shift();
		Array.isArray(current) ? stack.unshift(...current) : result.push(current);
	}
	return result;
};

// ALGORITHM: USING SPLICE
// TIME:O(N) SPACE:O(N)
const flattenArray6 = (arr) => {
	let result = [];
	let stack = [...arr];
	let i = 0;

	while (i < stack.length) {
		let item = stack[i];
		if (Array.isArray(item)) {
			//take all elements inside array and insert it back in place
			stack.splice(i, 1, ...item);
		} else {
			result.push(item);
			//check next index;
			i++;
		}
	}
	return result;
};

console.log(flattenArray6([3, [[4]]]));
