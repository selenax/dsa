/*
There are n students, numbered from 1 to n, each with their own yearbook. They would like to pass their yearbooks around and get them signed by other students.
You're given a list of n integers arr[1..n], which is guaranteed to be a permutation of 1..n (in other words, it includes the integers from 1 to n exactly once each, in some order). The meaning of this list is described below.

Initially, each student is holding their own yearbook. The students will then repeat the following two steps each minute: 
Each student i will first sign the yearbook that they're currently holding (which may either belong to themselves or to another student), 
and then they'll pass it to student arr[i-1]. It's possible that arr[i-1] = i for any given i, in which case student i will pass their yearbook back to themselves. Once a student has received their own yearbook back, 
they will hold on to it and no longer participate in the passing process.

It's guaranteed that, for any possible valid input, each student will eventually receive their own yearbook back and will never end up holding more than one yearbook at a time.
You must compute a list of n integers output, whose element at i-1 is equal to the number of signatures that will be present in student i's yearbook once they receive it back.
Signature
int[] findSignatureCounts(int[] arr)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, n], and all values in arr[i] are distinct.
Output
Return a list of n integers output, as described above.

Example 1
n = 2
arr = [2, 1]
output = [2, 2]
Pass 1:
Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is Student 2.
Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is Student 1.
Pass 2:
Student 1 signs Student 2's yearbook. Then they pass it to the student at arr[0], which is Student 2.
Student 2 signs Student 1's yearbook. Then they pass it to the student at arr[1], which is Student 1.
Pass 3:
Both students now hold their own yearbook, so the process is complete.
Each student received 2 signatures.

Example 2
n = 2
arr = [1, 2]
output = [1, 1]
Pass 1:
Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is themself, Student 1.
Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is themself, Student 2.
Pass 2:
Both students now hold their own yearbook, so the process is complete.
Each student received 1 signature.

*/

function findSignatureCounts(arr) {
  const n = arr.length;
  const res = Array(n).fill(0); // Final result array
  const visited = Array(n).fill(false); // Tracks whether we've already processed a student

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let currStudent = i;
      const cycle = []; // Stores all students in the current cycle

      // Traverse the cycle starting from student i
      while (!visited[currStudent]) {
        // = !false
        visited[currStudent] = true;

        cycle.push(currStudent);

        currStudent = arr[currStudent] - 1; // calculate where the YB will be passed to next
      }

      // Everyone in the same cycle gets the same count (cycle length)

      const count = cycle.length;
      for (let val of cycle) {
        res[val] = count;
      }
    }
  }
  return res;
}

function findSignatureCounts(arr) {
  const n = arr.length;
  const result = Array(n).fill(0);

  // For each student's yearbook
  for (let i = 0; i < n; i++) {
    let seen = new Set();
    let current = i;

    while (!seen.has(current)) {
      seen.add(current);

      result[i]++; // someone signed student i’s book

      current = arr[current] - 1; // pass to next student
    }
  }

  return result;
}

console.log(findSignatureCounts([3, 2, 1]));
// console.log(findSignatureCounts([2,3,1,5,4]));
// console.log(findSignatureCounts([2,1]));
