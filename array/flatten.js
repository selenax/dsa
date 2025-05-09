// //Given nested arrays, return all values in one single array;

// console.log(flattenArray([1, [2], [3, [[4]]]])); //[ 1, 2, 3, 4 ]
// console.log(flattenArray([[['a']], [['b']]])); //[ 'a', 'b' ]

// TIME:O(N+D) SPACE:O(N+D); D=depth of nesting
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

// refactor
// TIME: O(N); worst case:O(N + D), D=depth of nesting
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

// refactor: USING STACK
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

	// elements were added in reverse order
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
console.log(flattenArray4([3, [[4]]]));
