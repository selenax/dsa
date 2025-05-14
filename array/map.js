// write the map function

//takes in an array and a callback, map also returns a new array
const myMap = (array, callback) => {
	//initalize empty array
	const result = [];
	//iterate over array
	for (let i = 0; i < array.length; i++) {
		//pass each element to the callback and push to result
		result.push(callback(array[i]));
	}
	//return result;
	return result;
};

function add(val) {
	return val + 1;
}

console.log(myMap([1, 2, 3, 4]), (num) => {
	num + 1;
});
// console.log(myMap([1, 2, 3, 4]), add);
