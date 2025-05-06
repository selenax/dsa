//Given nested arrays, return all values in one single array;

const flattenArray = (arr) => {
	let result = [];

	function checkArray(arg) {
		if (!Array.isArray(arg)) {
			result.push(arg);
		} else {
			for (let index in arg) {
				checkArray(arg[index]);
			}
		}
	}
	arr.forEach(checkArray);
	return result;
};

// console.log(flattenArray([1, [2], [3, [[4]]]])); //[ 1, 2, 3, 4 ]
// console.log(flattenArray([[['a']], [['b']]])); //[ 'a', 'b' ]

//refactor
const flattenArray2 = (arr) => {
	let flatten = [].concat(...arr);
    // console.log(flatten);
    
	return flatten.some(Array.isArray) ? flattenArray2(flatten) : flatten;
};

console.log(flattenArray2([1, [], [3, [[4]]]])); // [1, 3, 4].
// console.log(flattenArray2([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
