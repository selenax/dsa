// Given an array of intervals representing N meetings, find out if a person can attend all the meetings.
// Input:
// [[6,7],[2,4],[8,12]]
// Output:
// true
// Explanation:
// None of the meetings overlap with each other.

// Input:
// [[1,4],[2,5],[7,9]]
// Output:
// false
// Explanation:
// Meetings [1,4] and [2,5] overlap with each other.

/*
input: [][] of integers 
output: boolean

1. sort by start time to process meetings chronologically
2. if end time is larger than next meeting's start time, there's a overlap - return false
3. return true

edge case:
- 1 or less meeting is listed => no overlap, return true
*/

//TIME:O(n log n); 
//SPACE:O(1) if sorting in place; but O(n) here since I chose to avoid mutation
const canAttendMeetings = (intervals) => {
	if (intervals.length <= 1) return true; //edge case: 0 or 1 meeting

	const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

	for (let i = 1; i < sorted.length; i++) {
		// compare previous end time with current start time
		if (sorted[i - 1][1] > sorted[i][0]) {
			return false; // overlaps
		}
	}
	return true; // no overlap
};

console.log(
	canAttendMeetings([
		[6, 7],
		[2, 4],
		[8, 12],
	])
); //true
console.log(
	canAttendMeetings([
		[1, 4],
		[2, 5],
		[7, 9],
	])
); //false
console.log(
	canAttendMeetings([
		[6, 8],
		[2, 6],
		[1, 4],
	])
); // false
console.log(
	canAttendMeetings([
		[7, 10],
		[2, 4],
	])
); //true
