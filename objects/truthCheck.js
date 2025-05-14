// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

const truthCheck = (collection, predicate) => {
	// loop over collection array
	for (let key in collection) {
		// for each object inside the array
		const obj = collection[key];

		// return false if object doesn't have 'predicate' key or it's value is falsy
		if (!obj.hasOwnProperty(predicate)) {
			return false;
		} else if (!obj[predicate]) {
			return false;
		}
	}
	return true;
};


// ALGORITHM:  USING EVERY
const truthCheck2 = (collection, predicate) => {
	return collection.every((obj) => obj[predicate]);
};

console.log(
	truthCheck(
		[
			{ user: 'Tinky-Winky', sex: 'male' },
			{ user: 'Dipsy', sex: 'male' },
			{ user: 'Laa-Laa', sex: 'female' },
			{ user: 'Po', sex: 'female' },
		],
		'sex'
	)
); // true

console.log(
	truthCheck(
		[
			{ user: 'Tinky-Winky', sex: 'male' },
			{ user: 'Dipsy' },
			{ user: 'Laa-Laa', sex: 'female' },
			{ user: 'Po', sex: 'female' },
		],
		'sex'
	)
); // false

console.log(truthCheck([{ single: '' }, { single: 'double' }], 'single')); // false

console.log(
	truthCheck([{ single: 'double' }, { single: undefined }], 'single')
); // false

console.log(
	truthCheck(
		[
			{ name: 'Pete', onBoat: true },
			{ name: 'Repeat', onBoat: true, alias: 'Repete' },
			{ name: 'FastFoward', onBoat: true },
		],
		'onBoat'
	)
); // true
