// Challenge: runInOrder
// Write a function called runInOrder that accepts as arguments in this order -

// an array of functions
// an array of numbers representing times in milliseconds
// runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. For example -

// function sayHi() {
//   console.log('hi');
// }
// function sayBye() {
//   console.log('bye');
// }
// function sayHowdy() {
//   console.log('howdy');
// }

// runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
// /* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */

// if pass in each val in arrNums to setTimeout
// task queue: 300,600,200 ->
// 1. 200ms timer will run out first, moves to call stack and execute- log: 'howdy'
// 2. 100ms later, the 300ms timer will move to stack, execute- log 'hi'
// 3. 300ms later, the 600ms timer will log 'bye'
// THAT IS NOT what we want. To log it according to prompt, we have to factor in that these timers will start counting down approx same time.
const runInOrder = (arrFuns, arrNums) => {
	//Timer gets added to task queue synchronously and will all start couting down approx same time;
	//To accommodate previous timer, just add it to current time
	//step 1: 300
	//step 2: 300+600
	//step 3: 300+600+200

	let timer = 0;
	for (let i of arrFuns) {
		setTimeout(i, (timer += arrNums[i]));
	}
};
function sayHi() {
	console.log('hi');
}
function sayBye() {
	console.log('bye');
}
function sayHowdy() {
	console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
  should log:
  'hi' (after 200 ms)
  'bye' (100 ms after 'hi')
  'howdy' (300 ms after 'bye')
  */
