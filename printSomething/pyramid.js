// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Bruteforce - TIME:O(N^2) SPACE:O(1)
const pyramid = (n) => {
	//n = # rows, median = # columns
	//condition
	//log # if median - row <= column && median + row >= column
	//such that: 1 <= median >= 3
	const median = Math.floor((n * 2 - 1) / 2);
	for (let row = 0; row < n; row++) {
		let stair = '';
		for (let column = 0; column < n * 2 - 1; column++) {
			if (median - row <= column && median + row >= column) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
};

console.log(pyramid(3));
