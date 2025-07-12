// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
// return the minimum number of conference rooms required.

// Edge case:
// 1. two meetings start or end at the same time [[0, 10], [0, 15]]
// 2. one meeting starts at the same time another ends [[0, 10], [10, 20]]

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:
// Input: intervals = [[7,10],[2,4]]
// Output: 1

/*
1. the end time let us know when a room will open up => start next meeting
2. but we first need to figure out when the first meeting takes place so we could start tracking the end => sort by start time
3. use an array to track end time - simulating a min-heap
4. if the next meeting starts before the earliest ends, add a new room
    - otherwise, the room could be reused by removing the earliest end time
5. sort after each insert to maintain min-heap behavoior
*/

// 2 approaches to solve this problem: sweep line algorithm and Min-Heap

//ALGORITHM:1 sweep line - O(n log n)
const minMeetingRooms = (intervals) => {
	// assign each start time w/ start, and visa versa with end
	// sort all events by start and end time
	// if start and end is same, sort end first
	// initalize counter, increase by 1 if start or decrease by 1 if end
	// record max count at each iteration as that's the # of overlapping intervals
	// return max count

	let events = [];
	for (let [start, end] of intervals) {
		events.push([start, 'start']);
		events.push([end, 'end']);
	}

	events.sort((a, b) => {
		// start and end are same
		if (a[0] === b[0]) {
			// sort end before start
			return a[1] === 'end' ? -1 : 1;
		}
		return a[0] - b[0];
	});

	let count = 0;
	maxCount = 0;
	for (let [time, type] of events) {
		if (type === 'start') count++;
		else count--;
		maxCount = Math.max(count, maxCount);
	}

	return maxCount;
};

//ALGORITHM:2 Simulated min-heap w/ sorted array
//TIME:O(N^2) SPACE:O(N)
const minMeetingRooms2 = (intervals) => {
	// sort array by starting time
	intervals.sort((a, b) => a[0] - b[0]);

	// keep track of rooms needed, mimic min-heap with array
	const endTime = [];

	for (let [start, end] of intervals) {
		// start later than earliest end time, reuse room
		if (endTime.length && start >= endTime[0]) {
			endTime.shift();
		}
		// keep track of current meeting;
		endTime.push(end);

		// mimic min-heap by keeping smallest end time at the front
		endTime.sort((a, b) => a - b);
	}

	// length = # of room needed;
	return endTime.length;
};

// ALGORITHM:3 min-heap
// TIME:O(n log n) SPACE:O(N)
const minMeetingRooms3 = (intervals) => {
	const heap = new MinHeap();

	let sorted = [...intervals].sort((a, b) => a[0] - b[0]);

	for (let [start, end] of sorted) {
		// if heap isn't empty and the shortest meeting is smaller or equal to the next start time, reuse room
		if (heap.size() && heap.peek() <= start) {
			heap.pop();
		}
		heap.push(end);
	}
	return heap.size();
};

class MinHeap {
	constructor() {
		this.data = []; // initialize empty array to store heap
	}

	peek() {
		return this.data[0]; // return smallest value
	}

	size() {
		return this.data.length;
	}

	push(val) {
		this.data.push(val);
		// ensures heap remains valid after adding val
		this.heapifyUp();
	}

	// after insertion, this checks to see if the value is in the correct position
	// by compare and swap with the parent as needed by bubbling up
	heapifyUp() {
		let i = this.data.length - 1; //last index
		while (i > 0) {
			// stop at root, since root doesn't have parent
			let parent = Math.floor((i - 1) / 2); // compute parent's binary heap formula

			if (this.data[i] > this.data[parent]) break; //child is bigger than parent, order is in place;

			//else child is <= than parent, switch
			[this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
			i = parent; //continue bubbling up
		}
	}

	// 1. removes and return smallest element
	// 2. refill that hole with last element (since binary tree is fully filled every level, hence must use the last node),
	// 3. then restore min-heap order
	pop() {
		if (this.data.length === 1) return this.data.pop(); // base case

		const top = this.data[0];
		this.data[0] = this.data.pop();
		this.heapifyDown(); //bubbling down to the correct position
		return top;
	}

	// after inserting last index to the top, find its correct position by bubbling down
	// by compare and swap with its children
	heapifyDown() {
		let i = 0;
		const length = this.data.length;

		while (true) {
			const left = 2 * i + 1;
			const right = 2 * i + 2;
			let smallest = i;

			// compare w/left & right child
			// if left/right is not out of bound(ie last level) & it's smaller, swap
			if (left < length && this.data[left] < this.data[smallest])
				smallest = left;
			if (right < length && this.data[right] < this.data[smallest])
				smallest = right;

			if (smallest === i) break; // curr node is already smallest, heap satisfied, no swap

			[this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];

			i = smallest;
		}
	}
}

console.log(
	minMeetingRooms3([
		[0, 30],
		[5, 10],
		[15, 20],
	])
); //2

console.log(
	minMeetingRooms3([
		[0, 10],
		[2, 20],
		[6, 16],
	])
); //3

// console.log(
// 	minMeetingRooms([
// 		[7, 10],
// 		[2, 4],
// 	])
// ); //1
// console.log(minMeetingRooms([[5,10],[15,20],[5,30]]));
// console.log(minMeetingRooms([[2,11],[6,16],[11,16]]));
// console.log(minMeetingRooms([[2,11],[6,16],[10,16],[2,20]]));
