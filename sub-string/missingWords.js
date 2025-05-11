// Julia and Samantha are playing with strings. Julia has a string S, and Samantha has a string T which is a subsequence of string S. They are trying to find out what words are missing in T.
// Help Julia and Samantha to solve the problem. List all the missing words in T, such that inserting them at the appropriate positions in T, in the same order, results in the string S.
// Constraints
// 1 <= |T| <= |S| <= 106, where |X| denotes the length of string X.
// The length of each word will be less than 15.

// Function Parameter
// You are given a function missingWords that takes the strings S and T as its arguments.

// Function Return Value
// Return an array of the missing words.

// Sample Input
// I am using hackerrank to improve programming
// am hackerrank to improve
// Sample Output
// [I, using, programming]

// Explanation
// Missing words are:
// 1. I
// 2. using
// 3. programming

//find the missing words from s, and list them in their original order appear in s
//TIME:O(N); SPACE:O(N+M) - N/M are spaces for s/tWord arrays
const missingWords = (s, t) => {
	//split each parameter into array
	//start both string at 0 index, and while s index should be smaller than it's length:
	//iterate over s, compare each word with t
	//if not match with t, push currValue of s into array, increase s index
	//if matched, increase s & t index
	//return result;

	const result = [];
	let sWord = s.split(' ');
	let tWord = t.split(' ');
	let sIndex = 0,
		tIndex = 0;

	while (sIndex < sWord.length) {
		//NOTE: if t is exhausted b4 s, it will return 'undefined', although sWord[sIndex] !== undefined and will yield the correct answer,
		//tIndex < tWord.length should be explicit to avoid relying on side effects.
		if (tIndex < tWord.length && sWord[sIndex] === tWord[tIndex]) {
			tIndex++;
		} else {
			result.push(sWord[sIndex]);
		}
		sIndex++;
	}
	return result;
};

console.log(missingWords('we will meet again someday', 'we will meet')); //[again, someday]
console.log(missingWords('i like cheese', 'cheese')); //[i, like]
console.log(
	missingWords(
		'I love programming, pizza, coke and chips',
		'I programming, chips'
	)
); //["love", "pizza", "coke", "and"]
console.log(
	missingWords(
		'Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing',
		'Python is an easy to learn powerful programming language'
	)
);
//It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing
