// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}
}

function levelWidth(root) {
	const queue = [root, 'end'];
	const counter = [0];

	while (queue.length > 1) {
		let node = queue.shift();
		if (node === 'end') {
			counter.push(0);
			queue.push('end');
		} else {
			queue.push(...node.children);
			counter[counter.length - 1]++;
		}
	}

	return counter;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
// console.log(root);
console.log(levelWidth(root));
// module.exports = levelWidth;
