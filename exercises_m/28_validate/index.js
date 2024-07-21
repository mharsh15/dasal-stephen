// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require('./node');

function validate(node, min = null, max = null) {
	let leftStatus
	let rightStatus

	if (!node) {
		return true
	}
	//console.log(node.data, min, max)




	if (!min && !max) {
		leftStatus = validate(node.left, null, node.data)
		rightStatus = validate(node.right, node.data, null)
		console.log("final result", " left:", leftStatus, " right:", rightStatus)
		return leftStatus && rightStatus
	}

	if (!node.left) {
		leftStatus = true
	}
	else if (node.left.data < node.data) {
		leftStatus = validate(node.left, min, max)

	} else {
		leftStatus = false
	}

	if (!node.right) {
		rightStatus = true
	}
	else if (node.right.data > node.data) {
		console.log("too big max nr:", node.right.data, max)
		if (max && node.right.data > max) {
			rightStatus = false

		}
		else {

			rightStatus = validate(node.right, min, max)
		}
	} else {
		rightStatus = false
	}


	//console.log(node.data, leftStatus, rightStatus,)
	return leftStatus && rightStatus



}

function testOne() {
	const n = new Node(10);
	n.insert(5);
	n.insert(15);
	n.insert(0);
	n.insert(20);
	console.log(n)
	console.log(validate(n))
}

function testTwo() {
	const n = new Node(10);
	n.insert(5);
	n.insert(15);
	n.insert(0);
	n.insert(20);
	n.left.right = new Node(-10)
	console.log(n)
	console.log(validate(n))
}

function testThree() {
	const n = new Node(10);
	n.insert(5);
	n.insert(15);
	n.insert(0);
	n.insert(20);
	n.left.left.right = new Node(999);
	//console.log(n)
	console.log(validate(n))
}
//testOne() //true
//testTwo() //false
testThree() //false
module.exports = validate;
