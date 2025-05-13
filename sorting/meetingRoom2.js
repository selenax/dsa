// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
// return the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

//goal: check how many times they are overlapped
/* 
[0                           30]
    [5     10] 
               [15     20]
*/
var minMeetingRooms = function(intervals) {

intervals.sort((a,b) => a[0] - b[0])

let room = [intervals[0][1]];
console.log(room, 'room');


for(let x = 1; x < intervals.length; x++) {
  let [start, end] = intervals[x]
  
  // the earliest of the occupied room to become avaiable 
  let earliestEndingMeeting = Math.min(...room)

  // if we are starting a meeting before the earliest meeting ends
    // need to add a room
  // else 
    // that means we are going to take the room with meeting ending soonest (Math.min)
    // once we take that room, the current end time will indicate when the room will become avaiable again
    // therefore replace the earliest meeting end time with the current end time.
  if(start < earliestEndingMeeting) {
    room.push(end)
    console.log(room);
  } else {
    room[room.indexOf(earliestEndingMeeting)] = end;
  }
}
  return room.length;
};
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); 2
// console.log(minMeetingRooms([[7,10],[2,4]])); //1
// console.log(minMeetingRooms([[5,10],[15,20],[5,30]]));
// console.log(minMeetingRooms([[2,11],[6,16],[11,16]]));
// console.log(minMeetingRooms([[2,11],[6,16],[10,16],[2,20]]));
/*

[2      11]
[2                   20]
    [6        16]
       [11    16]

*/

