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
const Node = require('./node');

function levelWidth(root) {
	const counter = [];
	let children = [root]
	while (children.length > 0) {
		counter.push(children.length)
		const newChildren = []
		for (let child of children) {
			newChildren.push(...child.children)
		}
		children = newChildren

	}
	return counter
}

function testLevelWidth() {
	const root = new Node(0);
	root.add(1);
	root.children[0].add(2);
	root.children[0].add(3);
	root.children[0].children[0].add(4);
	console.log("R: ", levelWidth(root))

	const root2 = new Node(0);
	root2.add(1);
	root2.add(2);
	root2.add(3);
	root2.children[0].add(4);
	root2.children[2].add(5);
	console.log("R2: ", levelWidth(root2))
	//expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
}
testLevelWidth()
module.exports = levelWidth;
