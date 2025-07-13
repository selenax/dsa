// 215. Kth Largest Element in an Array
// Medium - Meta/AMZON

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

//ALGORITHM: bruth force: sort()
//TIME:O(n log n) SPACE:O(N)
const kthLargest = (arr, k) => {
	let sorted = [...arr].sort((a, b) => a - b);

	// n - k
	let target = sorted.length - k;

	return sorted[target];
};

//ALGORITHM: minheap
//TIME:O(n log k) SPACE:O(k)
const kthLargest2 = (arr, k) => {
	const heap = new MinHeap();

	for (let num of arr) {
		heap.push(num);

		if (heap.size() > k) heap.pop();
	}
	// kth largest is smallest in top k
	return heap.peek();
};

class MinHeap {
	constructor() {
		this.data = [];
	}

	peek() {
		return this.data[0];
	}

	push(val) {
		this.data.push(val);
		this.heapifyUp();
	}

	size() {
		return this.data.length;
	}

	pop() {
		if (this.data.length === 1) return this.data.pop();

		const top = this.data[0];
		this.data[0] = this.data.pop();
		this.heapifyDown();
		return top;
	}

	// compare w/ children
	heapifyDown() {
		let i = 0;
		let length = this.data.length;

		while (true) {
			const left = 2 * i + 1;
			const right = 2 * i + 2;

			let smallest = i;

			// keep left/right in bound, swap if smaller is found
			if (left < length && this.data[left] < this.data[smallest])
				smallest = left;
			if (right < length && this.data[right] < this.data[smallest])
				smallest = right;

			if (smallest === i) break; // curr node is the smallest, heap order satisfied, no swap

			// else curr node is not the smallest, swap
			[this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];

			i = smallest; // keep bubbling down
		}
	}

	// compare w/ parent
	heapifyUp() {
		let i = this.data.length - 1;

		while (i > 0) {
			const parent = Math.floor((i - 1) / 2);

			// parent is smaller, heap satisfied
			if (this.data[parent] <= this.data[i]) break;

			// else node is smaller, swap with parent
			[this.data[parent], this.data[i]] = [this.data[i], this.data[parent]];

			i = parent;
		}
	}
}

//stimulate minheap using array and sort() aka priority queue
//TIME:O(n * k log k)
const kthLargest3 = (arr, k) => {
	let queue = [];

	for (let num of arr) { // O(n)
		queue.push(num);

		if (queue.length > k) {
			queue.sort((a, b) => a - b); // O(k log k)
			queue.shift(); // O(k)
		}
	}
	queue.sort((a, b) => a - b); //O(k log k)
	return queue[0]; // kth largest is smallest in top-k
};

console.log(kthLargest3([3, 2, 1, 5, 6, 4], 2)); //5
console.log(kthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); //4
