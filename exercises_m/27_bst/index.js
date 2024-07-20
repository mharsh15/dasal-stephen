// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null

	}
	//non recursive
	// insert(data) {
	// 	// if (!this.data) {
	// 	// 	this.data = data
	// 	// }
	// 	// else {
	// 	const newNode = new Node(data)

	// 	// const rootNode 
	// 	// rootNode.data = this.data
	// 	// rootNode.left = this.left
	// 	// rootNode.right = this.right
	// 	let currentNode = null
	// 	let nextNode = null
	// 	if (this.data > newNode.data) {
	// 		currentNode = this.left
	// 		if (!this.left) {
	// 			this.left = newNode
	// 		}
	// 	} else {
	// 		currentNode = this.right
	// 		if (!this.right) {
	// 			this.right = newNode
	// 		}
	// 	}



	// 	while (currentNode) {
	// 		nextNode = currentNode.data > data ? currentNode.left : currentNode.right
	// 		let status = currentNode.data > data ? "left" : "right"
	// 		//console.log("currentNode data".currentNode.data, "nextNode", nextNode)
	// 		if (nextNode === null) {
	// 			if (status === "left") {
	// 				currentNode.left = newNode
	// 			} else {
	// 				currentNode.right = newNode
	// 			}
	// 		}
	// 		currentNode = nextNode
	// 	}


	// }
	// recusrive
	insert(data) {
		const newNode = new Node(data)
		if (data < this.data && this.left) {
			this.left.insert(data)
		}
		else if (data < this.data) {
			this.left = newNode
		}
		else if (data > this.data && this.right) {
			this.right.insert(data)
		}
		else {
			this.right = newNode
		}
	}


	contains() {

	}
}

function testInsert() {
	const node = new Node(10);
	node.insert(5);
	node.insert(15);
	node.insert(17);

	console.log(node) //.toEqual(5);
	console.log(node.right.data)//.toEqual(15);
	//console.log(node.right.right.data)//.toEqual(17);


}

function testInsertTwo() {
	const node = new Node(10);
	node.insert(5);
	node.insert(15);
	node.insert(20);
	node.insert(0);
	node.insert(-5);
	node.insert(3);
	console.log(node.left.left.right)

}

//testInsert()
testInsertTwo()


module.exports = Node;
