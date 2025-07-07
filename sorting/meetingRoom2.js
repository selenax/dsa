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

//ALGORITHM: Simulated min-heap w/ sorted array
//TIME:O(N^2) SPACE:O(N)
const minMeetingRooms = (intervals) => {
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

console.log(
	minMeetingRooms([
		[0, 30],
		[5, 10],
		[15, 20],
	])
); //2

console.log(
	minMeetingRooms([
		[0, 10],
		[2, 20],
		[6, 16],
	])
); //3

console.log(
	minMeetingRooms([
		[7, 10],
		[2, 4],
	])
); //1
// console.log(minMeetingRooms([[5,10],[15,20],[5,30]]));
// console.log(minMeetingRooms([[2,11],[6,16],[11,16]]));
// console.log(minMeetingRooms([[2,11],[6,16],[10,16],[2,20]]));
