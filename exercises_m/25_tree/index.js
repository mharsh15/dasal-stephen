// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data
		this.children = []
	}
	add(data) {
		const node = new Node(data)
		if (data) {
			this.children.push(node)
		}
	}
	remove(data) {
		if (this.children.length > 0) {
			let x = this.children.filter(child => { return child.data !== data })
			this.children = x
		}

	}



}

class Tree { }

//tests
function testTrees() {
	const n1 = new Node("a")
	n1.add("d")
	n1.add("b")
	// n1.add("b")
	// n1.add("b")
	// n1.add("d")
	// n1.add("d")
	n1.remove("b")
	console.log(n1.children.length)
	console.log(n1.children)

}
//testTrees()

module.exports = { Tree, Node };
