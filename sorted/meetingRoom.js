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

//O(nlogn + n)
function meetingRoom(intervals) {
  if(!intervals || intervals.length === 1) return true;
  //it's overlapping when interval[1] > interval2[0]
  intervals.sort((a,b) => a[0]-b[0]);

  // function overlapped(interval1, interval2) {
  //   return interval1[1] > interval2[0]
  // }
  for(let x = 0; x < intervals.length-1; x++) {
   if(intervals[x][1] > intervals[x+1][0]) {
     return false;
  }
}
  return true;
}


console.log(meetingRoom([[6,7],[2,4],[8,12]]));
console.log(meetingRoom([[1,4],[2,5],[7,9]]));
console.log(meetingRoom([[6,8],[2,6],[1,4]]));
console.log(meetingRoom([[7,10],[2,4]]));
