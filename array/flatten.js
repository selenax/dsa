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

console.log(flattenArray([1, [2], [3, [[4]]]])); //[ 1, 2, 3, 4 ]
console.log(flattenArray([[['a']], [['b']]]));  //[ 'a', 'b' ]
