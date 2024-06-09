// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}


}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head)

	}

	size() {
		let node = this.head
		let count = 0;

		//MH Implemetation
		// 	if (node !== null) {
		// 		count++
		// 	}
		// 	else {

		// 		return count
		// 	}
		// 	while (node.next !== null) {
		// 		count++
		// 		node = node.next
		// 	}
		// 	return count
		while (node) {
			count++;
			node = node.next
		}
		return count
	}

	getFirst() {

		return this.head
	}
	//get last node of linked list
	getLast() {
		let node = this.head
		let lastNode = this.head
		while (node) {
			//console.log("getLast", node)
			if (node.next == null) {
				lastNode = node
				//console.log("setLastNode", lastNode)
			}
			node = node.next
		}
		return lastNode
	}
	//clears entire linked list
	clear() {
		this.head = null
	}
	//remove first element, first means this.head is pointing to
	removeFirst() {
		const firstNode = this.getFirst()
		if (firstNode) {
			this.head = firstNode.next
		}

	}
	//removes last element. here last means last element from head pointer
	removeLast() {
		let currentNode = this.head
		let previousNode = null

		if (this.size() == 1) {
			this.head = null
			return
		}
		while (currentNode) {

			if (!currentNode.next) {
				previousNode.next = null
			}
			previousNode = currentNode
			currentNode = currentNode.next

		}
	}
}

/**
 * all test functions *****************************
 */
/**
 * to test creation of node
 */
function testNode() {
	const n = new Node("hi")
	console.log(n.data, n.next)
	const n2 = new Node("hello", n)
	console.log(`n2: ${n2.data}, ${n2.next}`)
	const n3 = new Node("are you there?", n2)
	console.log(`n3: ${n3.data}, ${n3.next}`)
	console.log(`n: ${n}}`)
}
/**
*checks creation of linked list, insertFirst Function, size function of linked list
 */
function addNewLinkedList() {
	let linkedList = new LinkedList()
	linkedList.insertFirst("a")
	linkedList.insertFirst("b")
	linkedList.insertFirst("c")
	console.log(linkedList.head)
	console.log(`size: ${linkedList.size()}`)
	const ll = new LinkedList()
	console.log(`size: ${ll.size()}`)
	console.log(`lastNode: ${ll.getLast()}`)
	ll.insertFirst("apfel")
	console.log(`size: ${ll.size()}`)
	console.log(`lastNode: ${linkedList.getLast()}`)
}


function testClear() {
	const l = new LinkedList()
	l.insertFirst("test")
	console.log(`size of l: ${l.size()}`)
	l.insertFirst("next")
	console.log(`size of l: ${l.size()}`)
	l.clear()
	console.log(`size of l: ${l.size()}`)
}

function testRemoveFirst() {
	const l = new LinkedList()
	l.insertFirst("test")
	console.log(`size of l: ${l.getFirst().data} `)
	l.insertFirst("next")
	console.log(`size of l: ${l.getFirst().data} `)
	l.removeFirst()
	console.log(`first node after function of l: ${l.getFirst().data} `)
	l.removeFirst()
	l.removeFirst()
}

function testRemoveLast() {
	const l = new LinkedList()
	l.insertFirst('c');
	l.insertFirst('b');
	l.insertFirst('a');
	l.removeLast()
	console.log(`get last: ${l.getLast().data}`)

	l2 = new LinkedList()
	l2.removeLast()
}
/**
* test function invocation
 */
//testNode()
//addNewLinkedList()
//testClear()
//testRemoveFirst()
testRemoveLast()


module.exports = { Node, LinkedList };
