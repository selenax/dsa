/*
Problem: Meeting Rooms II (Leetcode-253)
Category: Intervals / Heap 

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
Example 1: Input: intervals = [[0,30],[5,10],[15,20]]; Output: 2
Example 2: Input: intervals = [[7,10],[2,4]]; Output: 1

Approaches: 
1. Brute Force - O(n^2)
    - steps: Compare each interval with all others, count overlaps
    ✅ Pros: easy to reason
    ❌ Cons: too slow for large n 

2. Better Approach: Min Heap - O(n log n)
    - steps: 
        1. Sort intervals by start time.
        2. Create a min-heap for meeting end times
        3. For each interval:
            - While heap.top <= current start, pop (free room)
            - Push current meeting’s end into heap
            - Track max heap size
        4. Return max heap size
    ✅ Pros:
      - Works for production (can assign rooms).
      - Handles dynamic inputs (meetings coming in real-time)
    ❌ Cons:
      - Require defining heap class 
      - slightly higher overhead than sweep-line 


3. Optimal Approach: Two-pointer Sweep - O(n log n)
    - steps: 
        1. Extract starts and ends, sort separately
        2. Walk both arrays with pointers
        3. Increment rooms if start < end, else decrement
        4. Track max rooms
    ✅ Pros:
      - short, clean code
      - slighly faster than heap (lower overhead)
    ❌ Cons:
      - only gives room count, not actual room mapping
      - less flexible if problem requirements change 


Notes:
- If start == end, room can be reused
- For interview: Sweep-line = better choice
- For production: Heap = more realistic for scheduling
*/

/*
Approach 1: Two-pointer sweep-line (vertical line sweeps across (sorted)time; ie schedules)
Time: O(n log n) (for sorting starts & ends)
Space: O(n) (two arrays of start/end times)
*/
const minMeetingRooms_sweepline = (intervals) => {
  if (!intervals || intervals.length === 0) return 0;

  // Step 1: Extract all start times and end times
  const starts = intervals.map(([s]) => s).sort((a, b) => a - b);
  const ends = intervals.map(([, e]) => e).sort((a, b) => a - b);

  // Step 2: Initialize pointers and counters
  let i = 0; // pointer for starts
  let j = 0; // pointer for ends
  let rooms = 0;
  let maxRooms = 0;

  // Step 3: Process all start times
  while (i < starts.length) {
    if (starts[i] < ends[j]) {
      // Case A: New meeting starts before earliest end -> need new room
      rooms++;
      i++;
    } else {
      // Case B: A meeting ended -> free a room
      rooms--;
      j++;
    }
    // Step 4: Track maximum concurrent rooms
    maxRooms = Math.max(maxRooms, rooms);
  }
  // Step 5: Return result
  return maxRooms;
};


//ALGORITHM 2: sorted array (simulate min-heap logic)
//TIME:loop n times, each iteration does a shift O(n) and a sort O(n log n). Summing to O(n^2) + O(n^2 log n).
//The sort cost outweighs the shift cost, so the total is O(n² log n).
const minMeetingRooms2 = (intervals) => {
  let max = 0;
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

    //record most max rooms used at the same time
    max = Math.max(max, endTime.length);
  }
  return max;
};

// // ALGORITHM:3 min-heap
// // TIME:O(n log n) SPACE:O(N)
// const minMeetingRooms3 = (intervals) => {
//   const heap = new MinHeap();

//   let sorted = [...intervals].sort((a, b) => a[0] - b[0]);

//   for (let [start, end] of sorted) {
//     // if heap isn't empty and the shortest meeting is smaller or equal to the next start time, reuse room
//     if (heap.size() && heap.peek() <= start) {
//       heap.pop();
//     }
//     heap.push(end);
//   }
//   return heap.size();
// };

// class MinHeap {
//   constructor() {
//     this.data = []; // initialize empty array to store heap
//   }

//   peek() {
//     return this.data[0]; // return smallest value
//   }

//   size() {
//     return this.data.length;
//   }

//   push(val) {
//     this.data.push(val);
//     // ensures heap remains valid after adding val
//     this.heapifyUp();
//   }

//   // after insertion, this checks to see if the value is in the correct position
//   // by compare and swap with the parent as needed by bubbling up
//   heapifyUp() {
//     let i = this.data.length - 1; //last index
//     while (i > 0) {
//       // stop at root, since root doesn't have parent
//       let parent = Math.floor((i - 1) / 2); // compute parent's binary heap formula

//       if (this.data[i] > this.data[parent]) break; //child is bigger than parent, order is in place;

//       //else child is <= than parent, switch
//       [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
//       i = parent; //continue bubbling up
//     }
//   }

//   // 1. removes and return smallest element
//   // 2. refill that hole with last element (since binary tree is fully filled every level, hence must use the last node),
//   // 3. then restore min-heap order
//   pop() {
//     if (this.data.length === 1) return this.data.pop(); // base case

//     const top = this.data[0];
//     this.data[0] = this.data.pop();
//     this.heapifyDown(); //bubbling down to the correct position
//     return top;
//   }

//   // after inserting last index to the top, find its correct position by bubbling down
//   // by compare and swap with its children
//   heapifyDown() {
//     let i = 0;
//     const length = this.data.length;

//     while (true) {
//       const left = 2 * i + 1;
//       const right = 2 * i + 2;
//       let smallest = i;

//       // compare w/left & right child
//       // if left/right is not out of bound(ie last level) & it's smaller, swap
//       if (left < length && this.data[left] < this.data[smallest]) smallest = left;
//       if (right < length && this.data[right] < this.data[smallest]) smallest = right;

//       if (smallest === i) break; // curr node is already smallest, heap satisfied, no swap

//       [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];

//       i = smallest;
//     }
//   }
// }

// console.log(
//   minMeetingRooms3([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ])
// ); //2

// console.log(
//   minMeetingRooms3([
//     [0, 10],
//     [2, 20],
//     [6, 16],
//   ])
// ); //3

// console.log(
// 	minMeetingRooms([
// 		[7, 10],
// 		[2, 4],
// 	])
// ); //1
// console.log(minMeetingRooms([[5,10],[15,20],[5,30]]));
// console.log(minMeetingRooms([[2,11],[6,16],[11,16]]));
// console.log(minMeetingRooms([[2,11],[6,16],[10,16],[2,20]]));

// const meetingRoom2 = (intervals) => {
//   // base case;
//   if (intervals.length <= 1) return intervals.length;

//   // keep track of occupied rooms
//   let room = [];

//   intervals.sort((a, b) => a[1] - b[1]);

//   // end <= start reuse room
//   // end > start create room

//   for (let [start, end] of intervals) {
//     if (room.length && room[0] <= start) {
//       room.shift();
//     }
//     room.push(end);
//     intervals.sort((a, b) => a[1] - b[1]);
//   }
//   return room.length;
// };

// console.log(
//   meetingRoom2([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ])
// ); //2

/*
1. input: array of intervals 
2. output: integer representing max # of rooms occupied
3. to solve: given a list of meetings with start and end time, find how many are overlapped 
4. edge case: 
  - if len <= 1 return len
  - prevEnd <= currStart is not overlap, therefore overlap is when prevEnd > currStart 
*/
//     [0, 30],
//     [5, 10],
//     [15, 20],
const meetingRoom2 = (intervals) => {
  // sort start time
  // simulate min-heap by using array to track end time of all active meetings
  // if next meeting starts after the earliest one ends, reuse the room, by removing the earliest end time
  // else, there's an overlap, needs to add a room.
  // to maintain min-heap behavior, sort the array after each insert.
  // len of array at the end
};
